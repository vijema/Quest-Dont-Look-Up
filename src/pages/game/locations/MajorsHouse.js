import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import GameNavbar from "./../GameNavbar/GameNavbar"

const MajorsHouse = (props) => {

  debugger
  
  // Локальный стейт для отслеживания первого посещения
  const [islocationFirstVisit, setIislocationFirstVisit] = useState(true); 

  // Эффект для изменения состояния при первом посещении - на основе изменения стейта
  useEffect(() => {  
    const locationKey = 'MajorsHouse';
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
        <MajorsHouseFirstVisitComponent />        
        </div>
        
        </>
      )  : (
        <>
        <GameNavbar />
        <div className='content'>
        <MajorsHouseNextVisitsComponent />
        </div>                     
        </>
      )}
    </div>
    </div>    
  );
};

const MajorsHouseFirstVisitComponent = () => {
  return <h1><span style={{color: "pink"}}>Вы посетили дом мэра впервые.</span></h1>;
};

const MajorsHouseNextVisitsComponent = () => {
    return <>
        <h1><span style={{color: "aqua"}}>Вы ранее уже посещали дом мэра.</span></h1>
        <NavLink className="btn" to='/farmers-house'>
                    Visit Major's house
        </NavLink>
       </>
};

export default MajorsHouse;



