import axios from 'axios'

let instance = axios.create({
  baseURL: 'http://localhost:3000/api/'
});

let external =  axios.create({
  baseURL: 'http://localhost:3000/api/'
});

export {instance, external};
