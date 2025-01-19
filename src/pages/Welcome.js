import { NavLink } from "react-router-dom";
import "../styles/main.css";
import PicWelcome from "../img/Welcome.jpg";

const Welcome = () => {    
    return (
        <main className="">                            
            <img
                src={PicWelcome}
                className="project-details__cover"
                alt="cover"
            />
            <div className="project-details__content w-[460px] h-[25vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="title-3">
                     Mission objective:
                </div>
                <div className="project-details__text">
                    <p>Find the Major and safe Cape Rabbits!</p>                        
                </div>
                <NavLink to="/start" className="btn-gradient-purpblue">
                        Let's start!
                </NavLink>
            </div> 
        </main>
    );
};

export default Welcome;
