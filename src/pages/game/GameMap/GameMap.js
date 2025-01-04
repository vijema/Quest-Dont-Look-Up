import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./GameMap.css";
import maincss from "./../../../styles/main.css";
import Map from "../../../img/Map.jpg";

const GameMap = () => {
    const [mapOpen, setMapOpen] = useState(false);

    return (
        <>
            <button className="btn" onClick={() => setMapOpen(true)}>Open</button>

            <div className={`overlay animated ${mapOpen ? 'show' : ''}`}>
                <div className="modal"> 
                <div className="flex flex-col items-center">
                    <div className="img relative">
                        <img src={Map} className="" alt="logo" />
                        <svg onClick={() => setMapOpen(false)}   
                            className=""                         
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            
                            <g id="SVGRepo_iconCarrier">                                
                                <path
                                    d="M16 8L8 16M8.00001 8L16 16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                    stroke="#000000"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></path>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default GameMap;
