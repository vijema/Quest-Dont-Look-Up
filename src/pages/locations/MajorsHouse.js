import { NavLink } from "react-router-dom";
import PrimaryLocationsVisitCheck from "../utils/PrimaryLocationsVisitCheck";

const MajorsHouse = (props) => {
    const location = "MajorsHouse";

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <img src={props.state.locationsData[location].cover} className="project-details__cover" alt="cover" />
                    <div className="title-3">{props.state.locationsData[location].title}</div>
                    <PrimaryLocationsVisitCheck
                        state={props.state}
                        setLocationAttendedTrue={props.setLocationAttendedTrue}
                        attendedLocationKey={location}
                        setLocationAvailableTrue={props.setLocationAvailableTrue}
                        locationsAvailableAtFirstVisitKeys={["Lighthouse"]}
                        locationsAvailableAtNextVisitKeys={["FarmersHouse"]}
                        destroyLocation={props.destroyLocation}
                        locationstoDestroyAtFirstVisitKeys={[]}
                        locationstoDestroyAtNextVisitKeys={[]}
                        render={(isFirstVisit) => (
                            <div className="project-details__text">
                                {isFirstVisit ? <MajorsHouseFirstVisitComponent /> : <MajorsHouseFirstVisitComponent />}
                            </div>
                        )}
                    />
                </div>
            </div>
        </main>
    );
};

const MajorsHouseFirstVisitComponent = () => {
    return (
        <p>
            The Mayor's house is located right on the coast. As expected, no one answers when you knock. You are noticed by the Mayor's neighbors -
            local gardeners. They say that they were warned about your visit and confirm the captain's words - there has been no news about the fate
            of Major Rabbits for a couple of months. The last person to see him was a local shopkeeper, but he says that he allegedly saw the Mayor
            flying away from a local airfield in a hot air balloon with some lady. The police came several times inspected the house but still can't
            find any leads. At the request of the owner, the neighbors give you the keys, so the Mayor's house is at your complete disposal.
        </p>
    );
};

const MajorsHouseNextVisitsComponent = (props) => {
    return (
        <>
            <div className="project-details__text">
                <span style={{ color: "aqua" }}>Вы ранее уже посещали дом мэра.</span>
            </div>
            <NavLink className="btn" to="/farmers-house">
                Visit Farmer's house
            </NavLink>
        </>
    );
};

export default MajorsHouse;
