import { NavLink } from "react-router-dom";
import PrimaryLocationsVisitCheck from "../utils/PrimaryLocationsVisitCheck";

const MajorsHouse = (props) => {
    const location = "MajorsHouse";
    //const artifact = "MajorsHouseKey";

    return (
        <main className="section">
            <div className="container">
                <PrimaryLocationsVisitCheck
                    state={props.state}
                    setLocationAttendedTrue={props.setLocationAttendedTrue}
                    attendedLocationKey={location}
                    setLocationAvailableTrue={props.setLocationAvailableTrue}
                    locationsAvailableAtFirstVisitKeys={["FarmersHouse"]}
                    locationsAvailableAtNextVisitKeys={[]}
                    switchLocatonVisibility={props.switchLocatonVisibility}
                    switchLocatonVisibilityAtFirstVisitKeys={[]}
                    switchLocatonVisibilityAtNextVisitKeys={["Lighthouse", "ChurchYard"]}
                    destroyLocation={props.destroyLocation}
                    locationstoDestroyAtFirstVisitKeys={[]}
                    locationstoDestroyAtNextVisitKeys={[]}
                    setArtifactCollectedTrue={props.setArtifactCollectedTrue}
                    //collectedArtifactKey={artifact}
                    render={(isFirstVisit) => isFirstVisit 
                        ? <MajorsHouseFirstVisitComponent state={props.state} location={location} /> 
                        : <MajorsHouseNextVisitsComponent state={props.state} location={location} /> 
                    }
                />
            </div>
        </main>
    );
};

const MajorsHouseFirstVisitComponent = (props) => {
    return (
        <div className="project-details-col">
            
            <img src={props.state.locationsData[props.location].cover} className="project-details__cover" alt="cover" />
            <div className="project-details__content">
            <div className="title-3">{props.state.locationsData[props.location].title}</div>
            <div className="project-details__text">
                <p>
                    The Mayor's house is located right on the coast. As expected, no one answers when you knock. You are noticed by the Mayor's
                    neighbors - local gardeners. They say that they were warned about your visit and confirm the captain's words - there has been no
                    news about the fate of Major Rabbits for a couple of months. The last person to see him was a local shopkeeper, but he says that
                    he allegedly saw the Mayor flying away from a local airfield in a hot air balloon with some lady. The police came several times
                    inspected the house but still can't find any leads. At the request of the owner, the neighbors give you the keys, so the Mayor's
                    house is at your complete disposal.
                </p>
            </div>
            </div>
        </div>
    );
};

const MajorsHouseNextVisitsComponent = (props) => {
    return (
        <div className="project-details-col">
            
            <img src={props.state.locationsData[props.location].cover} className="project-details__cover" alt="cover" />
            <div className="project-details__content">
            <div className="title-3">{props.state.locationsData[props.location].title}</div>
            <div className="project-details__text">
                <span style={{ color: "aqua" }}>Вы ранее уже посещали дом мэра.</span>
            </div>
            <NavLink className="btn" to="/farmers-house">
                Visit Farmer's house
            </NavLink>
        </div>
        </div>
    );
    };

export default MajorsHouse;
