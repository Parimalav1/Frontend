import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useParams } from 'react-router-dom';
import { PotluckDetailsDiv } from '../styles/StyledPotluck';
import UpdatePotluck from './UpdatePotluck';

const nextPotluck = {
    name: '',
    host: '',
    location: '',
    date: '',
    time: ''
};

// get food items
// {
//     "id": 16,
//     "item_name": "Chalupas",
//     "claimed": 0,
//     "potluck_id": 6
// }
// get guests
// {
//     "id": 1,
//     "guest_name": "Jack",
//     "potluck_id": 1
//  }

/* rendering all the details of a potluck on the webpage */
export default function PotluckDetails() {
    const [potluck, setPotluck] = useState(nextPotluck);
    const [items, setItems] = useState([]);
    const [guests, setGuests] = useState([]);
    const [claimed, setClaimed] = useState({});
    const [userIdName, setUserIdName] = useState({});
    const [hostName, setHostName] = useState('');
    const [editing, setEditing] = useState(false);
    let claimedDict = {}; 
    // const [editFoodItem, seteditFoodItem] = useState(initialFoodItem);
    const params = useParams();

    // fetching potluck👍
    const fetchPotluck = () => {
        axiosWithAuth()
            .get(`https://potluckplanner1.herokuapp.com/api/potlucks/${params.id}`)
            .then(res => {
                setPotluck(res.data)
            })
            .catch(err => console.log('ERROR'));
    };

    const fetchHostName = (hostId) => {
        axiosWithAuth()
        .get(`https://potluckplanner1.herokuapp.com/api/users/${hostId}`)
        .then(res =>{
            setHostName(res.data.username)
        })
        .catch(err => console.log('ERROR'));
    };

    const fetchItemDetails = (i) => {
        if (!items.length)
            return;
        console.log('items: ' + JSON.stringify(items));
        console.log('claimed:' + JSON.stringify(claimed) + ' expanded claimed: ' + JSON.stringify({ ...claimed }));

        axiosWithAuth()
            .get(`https://potluckplanner1.herokuapp.com/api/items/${items[i].id}`)
            .then(res => {
                claimedDict[items[i].id] = res.data.claimed;
                if (i === items.length - 1) {
                    console.log('Now setting claimed: ' + JSON.stringify(claimedDict));
                    setClaimed({ ...claimedDict });
                } else {
                    console.log('i: ' + i + ' items.length: ' + items.length);
                    i++;
                    if (i < items.length) {
                        fetchItemDetails(i);
                    }
                }
            })
    }

    const fetchItemsInPotluck = () => {
        if (!potluck.id)
            return;
        axiosWithAuth()
            .get(`https://potluckplanner1.herokuapp.com/api/potlucks/${potluck.id}/items`)
            .then((res) => {
                setItems(res.data);
            })
            .catch((err) => console.log(err.response));
    };

    const fetchGuests = () => {
        if (!potluck.id)
            return;
        axiosWithAuth()
            .get(`https://potluckplanner1.herokuapp.com/api/potlucks/${potluck.id}/guests`)
            .then(res => {
                setGuests(res.data);
            })
            .catch(err => console.log('ERROR'));
    };

    useEffect(() => {
        fetchPotluck();
    }, []);

    useEffect(() => {
        fetchPotluck();
    }, [editing]);

    useEffect(() => {
        fetchItemsInPotluck();
        if (potluck.user_id)
            fetchHostName(potluck.user_id);
    }, [potluck]);

    useEffect(() => {
        let currentIndex = 0;
        fetchItemDetails(currentIndex);
    }, [items]);

    useEffect(() => {
        fetchGuests();
    }, [potluck]);

    useEffect(() => {
        fetchUserNames();
    }, [claimed]);

    const claimFood = (itemId) => {
        if (guests.map(x => x.guest_name).indexOf(localStorage.getItem('username')) === -1 ) {
            alert("You are not on the guestlist, so you can't claim");
            return;
        }
        axiosWithAuth()
            .put(`https://potluckplanner1.herokuapp.com/api/items/${itemId}`, {
                claimed: localStorage.getItem('userId')
            })
            .then(res => {
                setClaimed({...claimed,
                [itemId]: localStorage.getItem('userId')
                })
            })
            .catch(err => console.log('ERROR'));
    };

    const fetchUserNames = () => {
        // claimed = {'56': 4, '55': 1, '45': 3}
        // userIdName = {'4': 'testuser110', '1': 'lambda', '3': 'someuser'}
        let promises = [];
        Object.values(claimed).map(x => {
            if (x !== 0) {
                promises.push(
                    axiosWithAuth()
                        .get(`https://potluckplanner1.herokuapp.com/api/users/${x}`)
                        .then(res => {
                            return { [x]: res.data.username };
                        })
                        .catch(err => console.log('ERROR'))
                )
            }
        })
        Promise.all(promises).then(results => {
            let newDict = {}
            for (let i in results) {
                newDict = { ...newDict, ...results[i] }
            }
            setUserIdName(newDict);
            console.log('newDict:' + JSON.stringify(newDict));
        })
    };

    const guestClaimedFood = (guest_name) =>{
        let namesThatHaveClaimed = Object.values(claimed).map(x => userIdName[x]);
        console.log(namesThatHaveClaimed);
        return namesThatHaveClaimed.indexOf(guest_name) === -1 ? false: true;
    };

    const deleteItem = (itemId) => {
        axiosWithAuth()
        .delete(`https://potluckplanner1.herokuapp.com/api/items/${itemId}`)
        .then(res =>{
            console.log('Item deleted');
            let remainingItems =  items.filter(x => x.id !== itemId);
            setItems(remainingItems);
        })
        .catch(err => 'ERROR');
    };

    const deleteGuest = (guestId) => {
        axiosWithAuth()
        .delete(`https://potluckplanner1.herokuapp.com/api/guests/${guestId}`)
        .then(res =>{
            console.log('Item deleted');
            let remainingGuests =  guests.filter(x => x.id !== guestId);
            setGuests(remainingGuests);
        })
        .catch(err => 'ERROR');
    };

    const editPotluckDetails = () => {
        setEditing(true);
    };

    if (!potluck.id) {
        return <div>Loading potluck information...</div>;
    };
    console.log(items);
    console.log(potluck);
    console.log('claimed: ' + JSON.stringify(claimed));
    console.log('userIdName: ' + JSON.stringify(userIdName))
    return (
        <PotluckDetailsDiv>
            <h2>{potluck.name}<button className='Btn' onClick={editPotluckDetails}>Edit</button></h2>
            {hostName && hostName.length && <h2>Host: {hostName}</h2>}
            <p>When: {potluck.date}<br /></p>
            <p>Time: {potluck.time}<br /></p>
            <p>Where: {potluck.location}<br /></p>
            {editing && <UpdatePotluck potluckId={potluck.id} setEditing={setEditing}/>}
            <h3>Food Menu</h3>
            <div>
                {
                    items.map(x => {
                        return <p key={x.id}>
                            <button onClick={() => deleteItem(x.id)}> Delete </button>
                            {x.item_name} - {claimed[x.id] && userIdName[claimed[x.id]]? `claimed by ${userIdName[claimed[x.id]]}` : 'unclaimed'}
                            <span>
                                {!claimed[x.id] &&
                                    <button onClick={() => claimFood(x.id)}>
                                        Claim
                                    </button>
                                }
                            </span>
                        </p>
                    })
                }

                {/* <input
                    placeholder='Dish'
                    type="text"
                    name="item_name"
                    value={nextFoodItem.item_name}
                    onChange={handleChangeToNextFoodItem}
                />
                <button className='Btn' onClick={addFood}>Add Item</button>
                {
                    foodItems.map(x => {
                        return <p key={x.item_name}><span role="img" aria-label=''>🍗</span>  {x.item_name}<span role="img" aria-label=''> 🌭 </span><br /></p>
                    })
                } */}
            </div>
            {/* items.filter(x => x.potluck_id === potluck.id) */}
            <h3>Guestlist</h3>
            {
                guests.map(x => {
                return <p key={x.id}> 
                <button onClick={() => deleteGuest(x.id)}> Delete </button>
                {x.guest_name} - {guestClaimedFood(x.guest_name)? 'confirmed': 'pending'}
                </p>
                })
            }
        </PotluckDetailsDiv>
    )
};  
