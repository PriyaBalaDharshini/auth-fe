import axios from 'axios';

const AxiosService = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
        "Content-Type": "application/json"
    }
});

AxiosService.interceptors.request.use((config) => {
    /* console.log(config); */
    const token = sessionStorage.getItem('token');
    if (token) {
        config.headers.Authorization = token ? `Bearer${token}` : null;
        return config
    }
}, (error) => {

    return Promise.reject(error)
});

export default AxiosService