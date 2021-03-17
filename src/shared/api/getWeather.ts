import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'ca76b757afc5b577e51f15a96d920bcc'

const getWeather = async (search: string) => {
    const {data} = await axios.get(URL, {
        params: {
            q: search,
            units: 'metric',
            APPID: API_KEY
        }
    })
    return data
}
export default getWeather 
