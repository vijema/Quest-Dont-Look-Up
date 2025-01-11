import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/main.css"
import Welcome from "./pages/Welcome"
import Start from "./pages/game/locations/Start"
import MajorsHouse from "./pages/game/locations/MajorsHouse"
import FarmersHouse from "./pages/game/locations/FarmersHouse"
import MainNavbar from "./pages/game/MainNavbar/MainNavbar"

// Locatoios dots and annotations
// Modal map prototype added
// Some location items components added as list via array
// Local storage stable work beta v1

function App(props) { 
	
  return (
    <div className='App'> 
    <Router> 
        <MainNavbar state={props.state} clearKeys={props.clearKeys}/>             
        <Routes>            
            <Route path="/" element={<Welcome  clearKeys={props.clearKeys}/>} />
            <Route path="/start" element={<Start state={props.state}/>} />
            <Route path="/majors-house" element={<MajorsHouse 
			    state={props.state}
			    setLocationAttendedTrue={props.setLocationAttendedTrue}
                setLocationAvailableTrue={props.setLocationAvailableTrue}
                destroyLocation={props.destroyLocation} />}
            />
            <Route path="/farmers-house" element={<FarmersHouse 
				state={props.state}
				setLocationAttendedTrue={props.setLocationAttendedTrue}
                setLocationAvailableTrue={props.setLocationAvailableTrue}
                destroyLocation={props.destroyLocation} />}
            />           
        </Routes>   
        </Router>    
      </div>
    
  );
}

export default App;
