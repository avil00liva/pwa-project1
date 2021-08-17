import axios from 'axios'

const URL = "https://api.openweathermap.org/data/2.5/weather"
const API_KEY = "309c593b8907331d57c552a8aefd5399"

export const fetchWeather = async (query) => {
    const {data}=await axios.get(URL, {
        params: {
            q: query,
            units: "metric",
            APPID: API_KEY,
        }
    })
    return data
}
