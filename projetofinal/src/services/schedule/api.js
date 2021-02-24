import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost/schedules"
});

export default api;
