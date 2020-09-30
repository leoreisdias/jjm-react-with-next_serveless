/* eslint-disable indent */
require("dotenv").config();
import axios from 'axios'

const api = axios.create({
    baseURL: process.env.JJM_API
})

export default api
