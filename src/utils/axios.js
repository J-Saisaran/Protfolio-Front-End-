import axios from 'axios';

const instance = axios.create({
  baseURL:'https://protfolio-back-end.onrender.com/api',
});

export default instance;
