import { Route, Routes, BrowserRouter } from 'react-router-dom';
import "./styles/main.css"
import Welcome from "./pages/Welcome"
import Start from "./pages/game/locations/Start"
import MajorHouse from "./pages/game/locations/MajorHouse"


function App() {
  return (
    //Hi
    <div className='App'>
    <BrowserRouter>
        <Routes>
        <Route path="/welcome" element={<Welcome/>} />
        <Route path="/start" element={<Start/>} />
        <Route path="/major-house" element={<MajorHouse/>} />
          
          
        </Routes>
      </BrowserRouter>
      </div>
    
  );
}

export default App;
