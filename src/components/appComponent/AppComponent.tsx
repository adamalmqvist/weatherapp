import getWeather from '../../shared/api/getWeather'
import {useState} from 'react'
import '../appComponent/AppComponent.css'
import searchIcon from '../../shared/images/loupe.svg'

export const AppComponent = () => {
    const [search, setSearch] = useState<any>('')
    const [weather, setWeather] = useState<any>({})

    const getData = async (e: any) => {
        if(e.key === 'Enter'){
            const data = await getWeather(search)
            setWeather(data)
            setSearch('')  
            console.log(data.main.temp)
        }
    }
    console.log(weather)
    console.log(weather.temp)
  
    return (
        <main className="mainContainer">
           <div >
               <div className="header"><h1>Weather App</h1></div>
           <div className="searchBox">
               <input className="searchInput"type="text" name="" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} onKeyPress={getData}></input>
               <button className="searchButton">
               <img className="searchIcon" src={searchIcon} alt="error"/>
               </button>
           </div>
               {weather.main && ( 
            <div className="weatherContainer">
                <h1>{weather.name}</h1>
                <h2>{Math.round(weather.main.temp)}°C</h2>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description}></img>
            </div>
               )}
            </div>
            </main>
    )
}
