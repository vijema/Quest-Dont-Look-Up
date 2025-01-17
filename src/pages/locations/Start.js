import { NavLink } from "react-router-dom";

const Start = (props) => {
    const location = "Start";
    return (
        <main className="section">
            <div className="container">
                <div className="project-details-col">
                    <img src={props.state.locationsData[location].cover} className="project-details__cover" alt="cover" />
                    <div className="project-details__content">
                        <div className="title-3">{props.state.locationsData[location].title}</div>
                        <div className="project-details__text">
                            <p>
                                You are heading to Cape Rabbits on a boat at the invitation of your old comrade in arms, the founder and mayor of this
                                wonderful town - the retired commander of the elite rabbit SEALs Major Rabbits, nicknamed in this town the Holy Major.
                                During the voyage, you meet the captain and he tells you that a couple of months ago the Major disappeared without a
                                trace!
                            </p>
                        </div>
                        <NavLink className="btn" to="/majors-house">
                            Visit Major's house
                        </NavLink>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Start;
