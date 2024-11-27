import { useState, useEffect } from 'react';
import GameNavbar from "./../GameNavbar/GameNavbar"

const FarmersHouse = (props) => {

  debugger
  
  // Локальный стейт для отслеживания первого посещения
  const [islocationFirstVisit, setIislocationFirstVisit] = useState(true); 

  // Эффект для изменения состояния при первом посещении - на основе изменения стейта
  useEffect(() => {  
    const locationKey = 'FarmersHouse';
    const locationHasVisited = props.state.locationsData[locationKey].isAttended;    

    if (!locationHasVisited) { 
      localStorage.setItem(locationKey + ' has visited', 'true');
      props.isLocationAttendedTrue (locationKey)        
    } else {
      setIislocationFirstVisit(false); // Если пользователь уже посещал страницу, обновляем состояние
        
    }
  }, [props]);


  return (
    <div className="locationMajorHouse">
        <div className="CommonBg">
        
      {islocationFirstVisit ? (
        <>
        <GameNavbar />
        <div className='content'>
        <FarmersHouseFirstVisitComponent />        
        </div>
        
        </>
      )  : (
        <>
        <GameNavbar />
        <div className='content'>
        <FarmersHouseNextVisitsComponent />
        </div>                     
        </>
      )}
    </div>
    </div>    
  );
};

const FarmersHouseFirstVisitComponent = () => {
  return <h1><span style={{color: "pink"}}>Вы посетили дом фермера впервые.</span></h1>;
};

const FarmersHouseNextVisitsComponent = () => {
  return <h1><span style={{color: "aqua"}}>Вы ранее уже посещали дом фермера.</span></h1>;
};

export default FarmersHouse;



