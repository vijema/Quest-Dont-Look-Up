import { NavLink } from "react-router-dom";
import "../styles/main.css";
import PicWelcome from "../img/Ticket.jpg";

const Welcome = () => {
    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <div className="project-details__cover flex flex-col justify-center items-center gap-3 pb-6">
                    <img
                        src={PicWelcome}
                        className="w-full rounded-t-xl mb-2"
                        alt="cover"
                    />
                    <div className="project-details__desc">
                         Mission objective.
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
