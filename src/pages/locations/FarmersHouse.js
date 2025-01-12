import PrimaryLocationsVisitCheck from "../utils/PrimaryLocationsVisitCheck";


const FarmersHouse = (props) => {
    const location = "FarmersHouse";

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
                        locationsAvailableAtFirstVisitKeys={["SurfersBase", "MajorsStatue"]}
                        locationsAvailableAtNextVisitKeys={["Start"]}
                        destroyLocation={props.destroyLocation}
                        locationstoDestroyAtFirstVisitKeys={[]}
                        locationstoDestroyAtNextVisitKeys={[]}
                        render={(isFirstVisit) => (
                            <div className="project-details__text">
                                {isFirstVisit ? <FarmersHouseFirstVisitComponent /> : <FarmersHouseNextVisitsComponent />}
                            </div>
                        )}
                    />
                </div>
            </div>
        </main>
    );
};

const FarmersHouseFirstVisitComponent = () => {
    return (
        <h1>
            <span style={{ color: "pink" }}>Вы посетили дом фермера впервые.</span>
        </h1>
    );
};

const FarmersHouseNextVisitsComponent = () => {
    return (
        <h1>
            <span style={{ color: "aqua" }}>Вы ранее уже посещали дом фермера.</span>
        </h1>
    );
};

export default FarmersHouse;
