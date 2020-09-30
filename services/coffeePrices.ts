/* eslint-disable indent */
import axios from 'axios'
require("dotenv").config();

const coffeeApi = axios.create({
    baseURL:
        `https://www.quandl.com/api/v3/datasets/CEPEA/COFFEE_A.json?api_key=${process.env.COFFEE_API}`
})

export default coffeeApi
