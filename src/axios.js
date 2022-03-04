import axios from 'axios';

const instance = axios.create({
    baseURL: '...' /// the API (cloud function) URl
});

export default instance;


