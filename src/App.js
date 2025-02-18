import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./styles/main.css";
import { scrollbar } from "./styles/scrollbar.css";

import Welcome from "./pages/Welcome";
import Start from "./pages/locations/Start";
import BayArea from "./pages/locations/BayArea";
import MajorsHouse from "./pages/locations/MajorsHouse";
import FarmersHouse from "./pages/locations/FarmersHouse";
import ChurchYard from "./pages/locations/ChurchYard";
import Lighthouse from "./pages/locations/Lighthouse";
import MainNavbar from "./components/MainNavbar/MainNavbar";
import GameMap from "./pages/components/GameMap/GameMap";

import TheCity from "./pages/locations/City/City";




const App = (props) => {
    useEffect(() => {
        props.clearResetFlag(); // Убираем флаг сброса
      }, [props]);
   
    return (
        <Router>
            <MainLayout
                state={props.state}
                setLocationAttendedTrue={props.setLocationAttendedTrue}
                setLocationAvailableTrue={props.setLocationAvailableTrue} 
                switchLocatonVisibility={props.switchLocatonVisibility}               
                destroyLocation={props.destroyLocation}
                setArtifactCollectedTrue={props.setArtifactCollectedTrue}
                setServiceConditions={props.setServiceConditions}
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

          
            
            <Routes>
                <Route exact path="/" element={<Welcome clearKeys={props.clearKeys} />} />                  

                <Route
                    path="/start"                   
                    element={
                        <Start
                            state={props.state}
                            setLocationAttendedTrue={props.setLocationAttendedTrue}
                            setLocationAvailableTrue={props.setLocationAvailableTrue}
                            switchLocatonVisibility={props.switchLocatonVisibility}
                            destroyLocation={props.destroyLocation}
                            setArtifactCollectedTrue={props.setArtifactCollectedTrue}
                        />
                    }
                />       
                <Route
                    path="/bay-area"
                    element={
                        <BayArea
                            state={props.state}
                            setLocationAttendedTrue={props.setLocationAttendedTrue}
                            setLocationAvailableTrue={props.setLocationAvailableTrue}
                            switchLocatonVisibility={props.switchLocatonVisibility}
                            destroyLocation={props.destroyLocation}
                            setArtifactCollectedTrue={props.setArtifactCollectedTrue}
                            setServiceConditions={props.setServiceConditions}   
                        />
                    }
                />     
                <Route
                    path="/the-city/*"             
                    element={
                        <TheCity
                            state={props.state}
                            setLocationAttendedTrue={props.setLocationAttendedTrue}
                            setLocationAvailableTrue={props.setLocationAvailableTrue}
                            switchLocatonVisibility={props.switchLocatonVisibility}
                            destroyLocation={props.destroyLocation}
                            setArtifactCollectedTrue={props.setArtifactCollectedTrue}
                            setServiceConditions={props.setServiceConditions}   
                        />
                    }
                />        
                <Route
                    path="/majors-house/*"
                    element={
                        <MajorsHouse
                            state={props.state}
                            setLocationAttendedTrue={props.setLocationAttendedTrue}
                            setLocationAvailableTrue={props.setLocationAvailableTrue}
                            switchLocatonVisibility={props.switchLocatonVisibility}
                            destroyLocation={props.destroyLocation}
                            setArtifactCollectedTrue={props.setArtifactCollectedTrue}
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
                            switchLocatonVisibility={props.switchLocatonVisibility}
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
                            switchLocatonVisibility={props.switchLocatonVisibility}
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
                            switchLocatonVisibility={props.switchLocatonVisibility}
                            destroyLocation={props.destroyLocation}
                            setArtifactCollectedTrue={props.setArtifactCollectedTrue}
                        />
                    }
                />
                <Route path="*" element={<Navigate to="/" />} />
                {/* <Route path="*" element={<NotFound />} />       */}
            </Routes>
       
            {location.pathname !== "/" && 
             location.pathname !== "/start" && 
             location.pathname !== "/majors-house/living-room" &&
             location.pathname !== "/majors-house/attic" && 
             location.pathname !== "/majors-house/bedroom" &&  
             <GameMap state={props.state}/>}
        </div>
    );
};

export default App;
