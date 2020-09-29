import axios from 'axios';

const api = axios.create({
  // http://www.omdbapi.com/?apikey=3d06bfac&s=batman&type=movie
  baseURL: 'https://www.omdbapi.com',
});

export default api;