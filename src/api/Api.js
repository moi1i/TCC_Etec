import axios from 'axios';

const api = axios.create({
   baseURL: "https://drug-tcc-pablo.herokuapp.com"
});

export default api;