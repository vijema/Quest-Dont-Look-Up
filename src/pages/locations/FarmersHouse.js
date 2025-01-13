import PrimaryLocationsVisitCheck from "../utils/PrimaryLocationsVisitCheck";


const FarmersHouse = (props) => {
    const location = "FarmersHouse";
    const artifact = "LighthouseKey";

    return (
        <main className="section">
            <div className="container">
                <PrimaryLocationsVisitCheck
                    state={props.state}
                    setLocationAttendedTrue={props.setLocationAttendedTrue}
                    attendedLocationKey={location}
                    setLocationAvailableTrue={props.setLocationAvailableTrue}
                    locationsAvailableAtFirstVisitKeys={["Lighthouse", "Lighthouse", "ChurchYard"]}
                    locationsAvailableAtNextVisitKeys={[]}
                    switchLocatonVisibility={props.switchLocatonVisibility}
                    switchLocatonVisibilityAtFirstVisitKeys={[]}
                    switchLocatonVisibilityAtNextVisitKeys={["Start", "Lighthouse", "ChurchYard"]}
                    destroyLocation={props.destroyLocation}
                    locationstoDestroyAtFirstVisitKeys={[]}
                    locationstoDestroyAtNextVisitKeys={[]}
                    setArtifactCollectedTrue={props.setArtifactCollectedTrue}
                    collectedArtifactKey={artifact}
                    render={(isFirstVisit) => isFirstVisit
                        ? <FarmersHouseFirstVisitComponent state={props.state} location={location} /> 
                        : <FarmersHouseNextVisitsComponent state={props.state} location={location} /> 
                    }
                />
            </div>
        </main>
    );
};

const FarmersHouseFirstVisitComponent = (props) => {
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

const FarmersHouseNextVisitsComponent = (props) => {
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

export default FarmersHouse;
