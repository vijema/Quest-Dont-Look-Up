import { NavLink } from "react-router-dom";
import PrimaryLocationsVisitCheck from "../utils/PrimaryLocationsVisitCheck";

const ChurchYard = (props) => {
    const location = "ChurchYard";

    return (
        <main className="section">
            <div className="container">
                <PrimaryLocationsVisitCheck
                    state={props.state}
                    setLocationAttendedTrue={props.setLocationAttendedTrue}
                    attendedLocationKey={location}
                    setLocationAvailableTrue={props.setLocationAvailableTrue}
                    locationsAvailableAtFirstVisitKeys={[]}
                    locationsAvailableAtNextVisitKeys={[]}
                    switchLocatonVisibility={props.switchLocatonVisibility}
                    switchLocatonVisibilityAtFirstVisitKeys={[]}
                    switchLocatonVisibilityAtNextVisitKeys={[]}
                    destroyLocation={props.destroyLocation}
                    locationstoDestroyAtFirstVisitKeys={[]}
                    locationstoDestroyAtNextVisitKeys={[]}
                    setArtifactCollectedTrue={props.setArtifactCollectedTrue}
                    //collectedArtifactKey={artifact}
                    render={(isFirstVisit) => isFirstVisit
                        ? <ChurchYardFirstVisitComponent state={props.state} location={location} /> 
                        : <ChurchYardNextVisitsComponent state={props.state} location={location} /> 
                    }
                />
            </div>
        </main>
    );
};

const ChurchYardFirstVisitComponent = (props) => {
    return (
        <div className="project-details">
            <img src={props.state.locationsData[props.location].cover} className="project-details__cover" alt="cover" />
            <div className="title-3">{props.state.locationsData[props.location].title}</div>
            <div className="project-details__text">
                <p>
                    First visit.
                </p>
            </div>
        </div>
    );
};

const ChurchYardNextVisitsComponent = (props) => {
    return (
        <div className="project-details">
            <img src={props.state.locationsData[props.location].cover} className="project-details__cover" alt="cover" />
            <div className="title-3">{props.state.locationsData[props.location].title}</div>
            <div className="project-details__text">
                <p>
                    Second visit.
                </p>
            </div>
        </div>
    );
};

export default ChurchYard;
