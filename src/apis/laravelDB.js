import axios from 'axios';

// const proxy = 'https://cors-anywhere.herokuapp.com/'
export default axios.create({
  baseURL: `https://redcarrotsdev.be/api`
});
