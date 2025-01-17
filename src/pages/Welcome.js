import { NavLink } from "react-router-dom";
import "../styles/main.css";
import PicWelcome from "../img/Ticket.jpg";

const Welcome = () => {    
    return (
        <main className="section">
            <div className="container">
                <div className="project-details-col">                    
                    <img
                        src={PicWelcome}
                        className="project-details__cover"
                        alt="cover"
                    />
                    <div className="project-details__content">
                        <div className="title-3">
                             Mission objective:
                        </div>
                        <div className="project-details__text">
                            <p>Find the Major and safe Cape Rabbits!</p>                        
                        </div>
                        <NavLink to="/start" className="btn">
                                Let's start!
                        </NavLink>
                    </div>
                </div>
            </div>           
        </main>
    );
};

export default Welcome;
