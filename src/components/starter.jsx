import { useNavigate } from "react-router-dom";
import React from "react";

export default function Starter(){
    const navigate = useNavigate();
    
    return(
        <div className="page">
            <main className="starter-container">
                <div className="partial">
                    <img src="../src/assets/umbrella7.png" className="partial-img" alt="floating umbrella" />
                </div>
                <div className="starter-text">
                    <img src="../src/assets/umbrella3.png" className="starter-img" alt="app logo" />
                    <h2 className="starter-heading"><span className="breeze">Breeze</span> Forecast</h2>
                    <p className="starter-paragraph"> Your future forecaster Weather App</p>
                    <button 
                        className="starter-button"
                        onClick={() => navigate("/home")}
                    >
                        Get started →
                    </button>
                </div>
            </main>
        </div>
    )
}