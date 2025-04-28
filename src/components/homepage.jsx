import React, { useState, useEffect } from "react";
import { FaMap, FaSearch } from "react-icons/fa";
import { MdGridView } from "react-icons/md";
import { HiAdjustments } from "react-icons/hi";
import { WiCloudy, WiRaindrop, WiStrongWind, WiDaySunny } from "react-icons/wi";
import { FaThermometerHalf } from "react-icons/fa";
import { useNavigate } from "react-router-dom";




export default function Home(){
    
    const clientId = "uWBEPWd4k0tcC8KmWR4GB";
    const clientSecret = "c7TUvM6MIBCzPvzq91bE4K2GBaxehWnee1IxRG7D";
    const navigate = useNavigate();
    const [weatherData, setWeatherData] = useState(null);
    const [search, setSearch] = useState("");
    const [location, setLocation] = useState("nyarugenge"); 
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://data.api.xweather.com/forecasts/${location},rw?filter=3hr&limit=8&client_id=${clientId}&client_secret=${clientSecret}`);
                const data = await response.json();
                console.log(data);
                setWeatherData(data);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        }
    
        fetchData(); // <--- Call the function here
    }, [location]);

    // const formatDate = (timestamp) => {
    //     const date = new Date(timestamp * 1000);
    //     return date.toLocaleDateString("en-US", {
    //         weekday: "long",
    //         month: "short",
    //         day: "numeric"
    //     });
    // };
    // console.log(formatDate(weatherData && weatherData.response[0].periods[1].timestamp));
    
    
    //     fetch(`https://data.api.xweather.com/forecasts/${location} ,rw?client_id=${clientId}&client_secret=${clientSecret}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         setWeatherData(data);
    //     })
    // }, [])
    return(
        <div className="page">
        <main>
            
            <div className="home-container">
            <div className="side-forecast">
                <img onClick={() => navigate("../")} src="../src/assets/umbrella1.png" alt="" width={25} className="mb-20 mt-9"/>
                <div className="icon-container">
                    <a href="./home"><WiCloudy size={50} color="#aca9a9f0"/></a>
                    <p className="icon-text">Weather</p>
                </div>
                <div className="icon-container">
                    <a onClick={() => navigate("../cities")}><MdGridView size={30} color="#aca9a9f0" /></a>
                    <p className="icon-text">Cities</p>
                </div>
                <div className="icon-container">
                    <a href=""><FaMap size={30} color="#aca9a9f0"/></a>
                    <p className="icon-text">Map</p>
                </div>
                <div className="icon-container">
                    <a href=""><HiAdjustments className="horizontal-adjustments" size={30} color="#aca9a9f0" /></a>
                    <p className="icon-text">Settings</p>
                </div>
                
                 
                
                
            </div>
            <div className="search">
                <button>
                <FaSearch className="search-icon"/>
                </button>
                <input 
                type="text" 
                name="search"
                placeholder="Search for city..."
                className="search-input"
                spellCheck="false"
                autoComplete="off"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        setLocation(search);
                        setSearch("");
                    }
                }}
                />
            </div>
            <div className="dashboard">
                <h2 className="dashboard-city">{weatherData && weatherData.response[0].place.name}</h2>
                <p className="dashboard-chance">chance of rain:{weatherData && weatherData.response[0].periods[0].pop}%</p>
                <h1 className="dashboard-temp">{weatherData && weatherData.response[0].periods[0].maxTempC}°C</h1>
                <img 
                className="dashboard-img"
                src={`../src/assets/weatherIcons/${weatherData && weatherData.response[0].periods[0].icon}`}
                alt={weatherData && weatherData.response[0].periods[0].weather}
                width={200}
                />
            </div>
            <div className="today-forecast">
                <p className="Toforecast-text">Today's Forecast</p>
                <div className="today">
                <div className="forecast-container">
                    <p>6:00AM</p>
                    <img src="../src/assets/cloud.png" width={50} />
                    <h2 className="today-temp">25°</h2>
                </div>
                <div className="forecast-container">
                    <p>9:00AM</p>
                    <img src="../src/assets/sunny.png" width={50} />
                    <h2 className="today-temp">28°</h2>
                </div>
                <div className="forecast-container">
                    <p>12:00PM</p>
                    <img src="../src/assets/sun.png" width={50} />
                    <h2 className="today-temp">33°</h2>
                </div>
                <div className="forecast-container">
                    <p>3:00PM</p>
                    <img src="../src/assets/sun.png" width={50} />
                    <h2 className="today-temp">27°</h2>
                </div>
                <div className="forecast-container">
                    <p>6:00PM</p>
                    <img src="../src/assets/sun.png" width={50} />
                    <h2 className="today-temp">22°</h2>
                </div>
                <div className="forecast-container">
                    <p>9:00PM</p>
                    <img src="../src/assets/sunny.png" width={50} />
                    <h2 className="today-temp">30°</h2>
                </div>
                </div>
            </div>

            <div className="air-conditions">
                <p className="condition-text">Air Conditions</p>
                <div className="air-condition-container">
                <div className="condition-info">
                  <FaThermometerHalf size={30} color="#aca9a9f0" />
                  <span>
                    <h3>Real Feel</h3>
                    <h2>{weatherData && weatherData.response[0].periods[0].avgFeelslikeC}</h2>
                  </span>
                  
                </div>
                <div className="condition-info">
                  <WiRaindrop size={50} color="#aca9a9f0" />
                  <span>
                    <h3>Chance of rain</h3>
                    <h2>{weatherData && weatherData.response[0].periods[0].pop}%</h2>
                  </span>
                </div>
                <div className="condition-info">
                 <WiStrongWind size={30} color="#aca9a9f0" />
                 <span>
                    <h3>Wind</h3>
                    <h2>{weatherData && weatherData.response[0].periods[0].windSpeedKPH} km/h</h2>
                 </span>
                </div>
                <div className="condition-info">
                <WiDaySunny size={50} color="#aca9a9f0" />
                <span>
                    <h3>UV Index</h3>
                    <h2>{weatherData && weatherData.response[0].periods[0].uvi}</h2>
                </span>
                </div>
                <button className="see-more">See More</button>
                </div>
            </div>
            <div className="sevenday-forecast">
                <p className="sevenday-forecast-text">7-Day Forecast</p>
                <div className="seven-day">
                <div className="sevenDay-container">
                    <h2>Today</h2>
                    <img src="../src/assets/sun.png" width={40} />
                    <p>Sunny</p>
                    <h3>36/22</h3>
                </div>
                <div className="sevenDay-container">
                    <h2>Tue</h2>
                    <img src="../src/assets/sun.png" width={40} />
                    <p>Sunny</p>
                    <h3>37/21</h3>
                </div>
                <div className="sevenDay-container">
                    <h2>Wed</h2>
                    <img src="../src/assets/sun.png" width={40} />
                    <p>Sunny</p>
                    <h3>37/21</h3>
                </div>
                <div className="sevenDay-container">
                    <h2>Thur</h2>
                    <img src="../src/assets/cloud.png" width={40} />
                    <p>Cloudy</p>
                    <h3>37/21</h3>
                </div>
                <div className="sevenDay-container">
                    <h2>Fri</h2>
                    <img src="../src/assets/cloud.png" width={40} />
                    <p>Cloudy</p>
                    <h3>37/21</h3>
                </div>
                <div className="sevenDay-container">
                    <h2>Sat</h2>
                    <img src="../src/assets/raining.png" width={40} />
                    <p>Rainy</p>
                    <h3>37/21</h3>
                </div>
                <div className="sevenDay-container">
                    <h2>Sun</h2>
                    <img src="../src/assets/sunny.png" width={40} />
                    <p>Sunny</p>
                    <h3>37/21</h3>
                </div>
                </div>
                
            </div>
            </div>
        </main>
        </div>
    )
}