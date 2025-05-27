import axios from "axios"
import { ACCESS_TOKEN } from "./constants"

const api = axios.create({
    // baseURL: import.meta.env.VITE_API_URL,
    baseURL: "http://t00oc0c00o84g08kwg080w0c.68.183.54.121.sslip.io"
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem(ACCESS_TOKEN)
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
},(error) => {
    return Promise.reject(error)
})

export default api