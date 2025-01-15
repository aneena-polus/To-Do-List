import axios from 'axios';

export const getAllCountries = () => {
    return axios.get("https://to-do-list-00q9.onrender.com/data/countries");
};

export const getAllStates = (countryCode) => {
    return axios.get(`https://to-do-list-00q9.onrender.com/data/states/${countryCode}`);
};

export const onLogin = (userData) => {
    return axios.post("https://to-do-list-00q9.onrender.com/data/login",userData);
};

export const onSignUp = (userData) => {
    return axios.post("https://to-do-list-00q9.onrender.com/data/signup",userData);
};

