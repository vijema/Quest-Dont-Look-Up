import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import "./styles/main.css";
import Welcome from "./pages/Welcome";
import Start from "./pages/locations/Start";
import MajorsHouse from "./pages/locations/MajorsHouse";
import FarmersHouse from "./pages/locations/FarmersHouse";
import ChurchYard from "./pages/locations/ChurchYard";
import Lighthouse from "./pages/locations/Lighthouse";
import MainNavbar from "./components/MainNavbar/MainNavbar";
import GameMap from "./pages/components/GameMap/GameMap";

// Locatoios dots and annotations
// Modal map prototype added
// Some location items components added as list via array
// Local storage stable work beta v1

const App = (props) => {
    return (
        <Router>
            <MainLayout
                state={props.state}
                setLocationAttendedTrue={props.setLocationAttendedTrue}
                setLocationAvailableTrue={props.setLocationAvailableTrue}
                destroyLocation={props.destroyLocation}
                clearKeys={props.clearKeys}
            />
        </Router>
    );
};

const MainLayout = (props) => {
    const location = useLocation();
    
    return (
        <div className="App">
            <MainNavbar state={props.state} clearKeys={props.clearKeys} />
            {location.pathname !== "/" && location.pathname !== "/start" && <GameMap state={props.state} />}
            <Routes>
                <Route exact path="/" element={<Welcome clearKeys={props.clearKeys} />} />
                <Route path="/start" element={<Start state={props.state} />} />
                <Route
                    path="/majors-house"
                    element={
                        <MajorsHouse
                            state={props.state}
                            setLocationAttendedTrue={props.setLocationAttendedTrue}
                            setLocationAvailableTrue={props.setLocationAvailableTrue}
                            destroyLocation={props.destroyLocation}
                        />
                    }
                />
                <Route
                    path="/farmers-house"
                    element={
                        <FarmersHouse
                        state={props.state}
                            setLocationAttendedTrue={props.setLocationAttendedTrue}
                            setLocationAvailableTrue={props.setLocationAvailableTrue}
                            destroyLocation={props.destroyLocation}
                            setArtifactCollectedTrue={props.setArtifactCollectedTrue}
                        />
                    }
                />
                <Route
                    path="/lighthouse"
                    element={
                        <Lighthouse
                            state={props.state}
                            setLocationAttendedTrue={props.setLocationAttendedTrue}
                            setLocationAvailableTrue={props.setLocationAvailableTrue}
                            destroyLocation={props.destroyLocation}
                            setArtifactCollectedTrue={props.setArtifactCollectedTrue}
                        />
                    }
                />
                <Route
                    path="/church-yard"
                    element={
                        <ChurchYard
                            state={props.state}
                            setLocationAttendedTrue={props.setLocationAttendedTrue}
                            setLocationAvailableTrue={props.setLocationAvailableTrue}
                            destroyLocation={props.destroyLocation}
                            setArtifactCollectedTrue={props.setArtifactCollectedTrue}
                        />
                    }
                />
                <Route path="*" element={<Navigate to="/" />} />
                {/* <Route path="*" element={<NotFound />} />       */}
            </Routes>
        </div>
    );
};

export default App;
