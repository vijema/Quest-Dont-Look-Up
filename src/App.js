import { Route, Routes } from 'react-router-dom';
import "./styles/main.css"
import Welcome from "./pages/Welcome"
import Start from "./pages/game/locations/Start"
import MajorHouse from "./pages/game/locations/MajorHouse"


// Local storage stable work beta v1

function App(props) {

  
	
  return (
    <div className='App'>   
        <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/start" element={<Start/>} />
        <Route path="/major-house" element={<MajorHouse 
					userState={props.globalState.attendedLocations[0].isMajorHouseAttended}
					isMajorHouseAttended={props.isMajorHouseAttended} />} />
          
          
        </Routes>      
      </div>
    
  );
}

export default App;
