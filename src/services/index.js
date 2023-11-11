import axios from 'axios'
import { constants } from '../utils/constants'
import { EmptyLocalStorage, GetTokenLocalStorage } from '../services/localStorage'

axios.defaults.baseURL = constants.BASE_URL;

const api = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
})

api.interceptors.request.use(function (config) {
    const token = GetTokenLocalStorage();
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

api.interceptors.response.use(
    response => response,
    e => {
        if (e.response.status === 401) {
            setTimeout(() => {
                // EmptyLocalStorage()
                // window.location.href = '/';
            }, 0)
        }
        return Promise.reject(e);
    });

export default api

