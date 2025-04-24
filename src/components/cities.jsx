import React from "react";
import { FaMap, FaSearch } from "react-icons/fa";
import { MdGridView } from "react-icons/md";
import { HiAdjustments } from "react-icons/hi";
import { WiCloudy, WiRaindrop, WiStrongWind, WiDaySunny } from "react-icons/wi";
import { useNavigate } from "react-router-dom";




export default function Cities(){
    const navigate = useNavigate();
    return(
        <div className="page">
        <main>
            
            <div className="home-container">
            <div className="side-forecast">
                <img src="../src/assets/umbrella1.png" alt="" width={25} className="mb-20 mt-9"/>
                <div className="icon-container">
                    <a onClick={()=>navigate("../home")}><WiCloudy size={50} color="#aca9a9f0"/></a>
                    <p className="icon-text">Weather</p>
                </div>
                <div className="icon-container">
                    <a href=""><MdGridView size={30} color="#aca9a9f0" /></a>
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
                <FaSearch className="search-icon"/>
                <input 
                type="search" 
                name="search"
                placeholder="Search for city..."
                className="search-input"
                spellCheck="false"
                autoComplete="off"
                />
            </div>
            <div className="dashboard2">
               <div className="city-container">
                <img src="../src/assets/sun.png" width={70} />
                <div className="cityName-container">
                 <h2 className="city">Gasabo</h2>
                 <p>10:23</p>
                 <p className="city-temp">31°</p>
                </div>
                
               </div>
               <div className="city-container">
               <img src="../src/assets/cloud.png" width={70} />
               <div className="cityName-container">
                <h2 className="city">Huye</h2>
                <p>10:23</p>
                <p className="city-temp">27°</p>
                </div>
               
               </div>
               <div className="city-container">
                <img src="../src/assets/sun.png" width={70} />
                <div className="cityName-container">
                 <h2 className="city">Rubavu</h2>
                 <p>Paris</p>
                 <p className="city-temp">21°</p>
                </div>
                
               </div>
               <div className="city-container">
               <img src="../src/assets/cloud.png" width={70} />
               <div className="cityName-container">
                <h2 className="city">Musanze</h2>
                <p>10:23</p>
                <p className="city-temp">25°</p>
                </div>
               
               </div>
               <div className="city-container">
               <img src="../src/assets/sunny.png" width={70} />
               <div className="cityName-container">
                <h2 className="city">Bugesera</h2>
                <p>10:23</p>
                <p className="city-temp">30°</p>
                </div>
               
               </div>
               <div className="city-container">
               <img src="../src/assets/raining.png" width={70} />
               <div className="cityName-container">
                <h2 className="city">Kicukiro</h2>
                <p>10:23</p>
                <p className="city-temp">33°</p>
                </div>
               
               </div>
            </div>

            <div className="sevenday-forecast2">
                <div className="seven-day2">
                <div className="sevenDay-container1">
                    <div>
                    <h2 className="city-name2">Madrid</h2>
                    <p className="chanceOfRain">chance of rain: 0%</p>
                    <h2 className="temperature">32°</h2>
                    </div>
                    <img src="../src/assets/sun.png" width={140} className="side-image"/>
                </div>
                <div className="sevenDay-container2">
                    <h2>TODAY'S FORECAST</h2>
                    <div className="three-forecast">
                    <div className="forecast-info">
                        <p>6:00AM</p>
                        <img src="../src/assets/sun.png" width={60} />
                        <h2>25°</h2>
                    </div>
                    <div className="forecast-info">
                        <p>9:00AM</p>
                        <img src="../src/assets/sunny.png" width={60} />
                        <h2>25°</h2>
                    </div>
                    <div className="forecast-info">
                        <p>12:00PM</p>
                        <img src="../src/assets/raining.png" width={60} />
                        <h2>25°</h2>
                    </div>
                    </div>
                </div>
                <div className="sevenDay-container3">
                    <h3>3-DAY FORECAST</h3>
                    <div className="three-container">
                    <div className="seven-container">
                        <p className="day">Today</p>
                        <span className="two-container">
                        <img src="../src/assets/sun.png" width={40}  className="two-icon"/>
                        <h2>sunny</h2>
                        </span>
                        <h3><span className="text-white">36</span>/22</h3>
                    </div>
                    <div className="seven-container">
                        <p className="day">Tue</p>
                        <span className="two-container">
                        <img src="../src/assets/sunny.png" width={40}  className="two-icon"/>
                        <h2>Cloudy</h2>
                        </span>
                        <h3><span className="text-white">36</span>/21</h3>
                    </div>
                    <div className="seven-container">
                        <p className="day">Wed</p>
                        <span className="two-container">
                        <img src="../src/assets/sun.png" width={40}  className="two-icon"/>
                        <h2>Sunny</h2>
                        </span>
                        <h3><span className="text-white">36</span>/21</h3>
                    </div>
                    </div>
                </div>
                </div>
                
            </div>
            </div>
        </main>
        </div>
    )
}