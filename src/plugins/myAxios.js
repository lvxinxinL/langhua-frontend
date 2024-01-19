import axios from 'axios';

const myAxios = axios.create({
    baseURL: 'http://localhost:8080/api/',
});

myAxios.defaults.withCredentials = true;

// Add a request interceptor
myAxios.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log("发送请求啦...");
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
myAxios.interceptors.response.use(function (response) {
    // Do something with response data
    console.log("接收到请求啦...");
    return response.data;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

export default myAxios;

