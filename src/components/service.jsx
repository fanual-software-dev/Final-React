import axios from "axios";

const url = `https://api.themoviedb.org/3/movie/popular?api_key=53c4ff256384703bcd59d342ecd9742b`
const customAxios = axios.create({
    baseURL: url, // Set a base URL for all requests
    timeout: 5000, // Set a timeout of 5 seconds for all requests
    headers: {
      'Content-Type': 'application/json'
    },
  });

export const FilteringAxios = axios.create({
  baseURL: `https://api.themoviedb.org/3/discover/`,
  timeout: 5000, // Set a timeout of 5 seconds for all requests
  headers: {
    'Content-Type': 'application/json'
  },
})

export default customAxios