import { Route, Routes } from 'react-router-dom';
import "./styles/main.css"
import Welcome from "./pages/Welcome"
import Start from "./pages/game/locations/Start"
import MajorHouse from "./pages/game/locations/MajorHouse"

// Some location items components added as list via array
// Local storage stable work beta v1

function App(props) {

  
	debugger
  return (
    <div className='App'>   
        <Routes>
        <Route path="/" element={<Welcome  clearKeys={props.clearKeys}/>} />
        <Route path="/start" element={<Start/>} />
        <Route path="/major-house" element={<MajorHouse 
					state={props.state}
					isMajorsHouseAttended={props.isMajorsHouseAttended} />}
           />
          
          
        </Routes>      
      </div>
    
  );
}

export default App;
