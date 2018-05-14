import axios from 'axios'

export const AXIOS = axios.create({
    baseURL: `http://localhost:8080`,
    headers: {
        'Access-Control-Allow-Origin': 'http://127.0.0.0:8080'
    }
})