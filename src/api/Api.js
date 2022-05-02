import axios from 'axios';

const api = axios.create({
   baseURL: "http://20.226.4.122:8080/api"
});

export default api;