import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

// dos tipos de interceptors - request interceptor - antes de la peticion http
// el segundo - response interceptor - luego de la peticion http
// en este caso utilizamos el primero para enviar los headers antes de la peticion http
api.interceptors.request.use(config => {
    const token = localStorage.getItem('AUTH_TOKEN')
    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export default api