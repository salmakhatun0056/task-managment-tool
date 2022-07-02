import axios from 'axios';
const fetcher = axios.create({
    baseURL: 'https://conservative-doright-68525.herokuapp.com/',
});

export default fetcher;