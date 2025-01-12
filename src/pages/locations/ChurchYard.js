import { NavLink } from "react-router-dom";
import PrimaryLocationsVisitCheck from "../utils/PrimaryLocationsVisitCheck";

const ChurchYard = (props) => {
    const location = "ChurchYard";

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
                        locationsAvailableAtFirstVisitKeys={[]}
                        locationsAvailableAtNextVisitKeys={[]}
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
    return <p>Church Yard.</p>;
};

const MajorsHouseNextVisitsComponent = (props) => {
    return (
        <>
            <div className="project-details__text">
                <span style={{ color: "aqua" }}>Вы ранее уже посещали дом мэра.</span>
            </div>
            <NavLink className="btn" to="/church-yard">
                Go inside
            </NavLink>
        </>
    );
};

export default ChurchYard;
