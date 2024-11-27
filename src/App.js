import { Route, Routes } from 'react-router-dom';
import "./styles/main.css"
import Welcome from "./pages/Welcome"
import Start from "./pages/game/locations/Start"
import MajorsHouse from "./pages/game/locations/MajorsHouse"
import FarmersHouse from './pages/game/locations/FarmersHouse'

// Some location items components added as list via array
// Local storage stable work beta v1

function App(props) {

  
	debugger
  return (
    <div className='App'>   
        <Routes>
        <Route path="/" element={<Welcome  clearKeys={props.clearKeys}/>} />
        <Route path="/start" element={<Start/>} />
        <Route path="/majors-house" element={<MajorsHouse 
					state={props.state}
					isLocationAttendedTrue={props.isLocationAttendedTrue} />}
           />
        <Route path="/farmers-house" element={<FarmersHouse 
					state={props.state}
					isLocationAttendedTrue={props.isLocationAttendedTrue} />}
           />  
          
        </Routes>      
      </div>
    
  );
}

export default App;
