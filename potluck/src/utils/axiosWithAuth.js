import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    console.log('token: ' + token);
    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: 'https://potluckplanner1.herokuapp.com'
    });
};