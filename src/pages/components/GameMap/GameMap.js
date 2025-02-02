import { useState, useEffect } from 'react';
import styles from "./GameMap.module.css";
import Map from "../../../img/Map.jpg";
import BackgroundImage from '../../../img/Ticket.jpg';
import LocationItemDots from "./LocationItemDots";

const GameMap = (props) => {
    const [mapOpen, setMapOpen] = useState(false);
    const [locElements, setLocElements] = useState([]);
    
        
    useEffect(() => {
        const state = props.state;
        const locKeys = Object.keys(state.locationsData);
        const attendedLocKeys = locKeys.filter((key) => 
            (state.locationsData[key].isAttended || state.locationsData[key].isAvailable) && !state.locationsData[key].isHidden
        );
        const elements = attendedLocKeys.map((key) => (
            <LocationItemDots
                key={state.locationsData[key].title}
                title={state.locationsData[key].title}
                link={state.locationsData[key].link}
                coordinates={state.locationsData[key].coordinates}
                isVisited={state.locationsData[key].isAttended}
            />
        ));
        setLocElements(elements);
    }, [props]);

        
    return (
        <> 

            <div
            className={ 
                    `bg-cover bg-center bg-no-repeat h-24 w-24 rounded-md 
                     ${styles.minimap}                      
                     ${props.upscale ? `${props.upscale}` : "hover:scale-[105%]"}
                     ${props.position ? `${props.position}` : "fixed bottom-5 left-5 mt-5"}
                    `
                }
                
                style={{
                    backgroundImage: `url(${BackgroundImage})`,
                }}
                
                onClick={() => setMapOpen(true)} alt="minimap"
                >
                
                </div>

                {/* <img src={Minimap} 
                 className={`${styles.minimap} ${props.position ? `${props.position}` : "fixed bottom-5 left-5 mt-5"}`}
                onClick={() => setMapOpen(true)} alt="minimap"/> */}
                   
                
                {/* <button className="btn-gradient-purpblue w-36 fixed bottom-5 left-5 mt-5" onClick={() => setMapOpen(true)}>
                    Open map
                </button> */}
           

            <div //вернуть функцию закрытия по клику если нужно закрывать модалку при любом клике
             className={`${styles.overlay} ${styles.animated} ${mapOpen ? `${styles.show}` : ""}`}>
                <div className={styles.modal}>
                    <div className="flex flex-col items-center">
                        <div className="img relative">
                            <img src={Map} className={styles.img} alt="map" />
                            {locElements}
                            <svg onClick={() => setMapOpen(false)} //вернуть функцию закрытия по клику если нужно закрывать модалку только крестиком
                                className={styles.svg}
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
