import { useState } from "react";
import styles from "./GameMap.css";
import Map from "../../../img/Map.jpg";
import LocationItemDots from "./LocationItemDots";

const GameMap = (props) => {
    const [mapOpen, setMapOpen] = useState(false);

    const state = props.state;
    const locKeys = Object.keys(state.locationsData);
    const attendedLocKeys = locKeys.filter((key) => (state.locationsData[key].isAttended || state.locationsData[key].isAvailable) && !state.locationsData[key].isHidden);
    const locElements = attendedLocKeys.map((key) => (
        <LocationItemDots
            key={state.locationsData[key].title}
            title={state.locationsData[key].title}
            link={state.locationsData[key].link}
            coordinates={state.locationsData[key].coordinates}
            isVisited={state.locationsData[key].isAttended}
        />
    ));

    return (
        <>
            <button className="btn fixed bottom-5 right-5" onClick={() => setMapOpen(true)}>
                Open map
            </button>

            <div //вернуть функцию закрытия по клику если нужно закрывать модалку при любом клике
             className={`overlay animated ${mapOpen ? "show" : ""}`}>
                <div className="modal">
                    <div className="flex flex-col items-center">
                        <div className="img relative">
                            <img src={Map} className="" alt="logo" />
                            {locElements}
                            <svg onClick={() => setMapOpen(false)} //вернуть функцию закрытия по клику если нужно закрывать модалку только крестиком
                                className=""
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M16 8L8 16M8.00001 8L16 16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                        stroke="#000000"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
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
