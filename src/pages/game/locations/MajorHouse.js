import { useState, useEffect } from 'react';
import GameNavbar from "./../GameNavbar/GameNavbar"

const MajorHouse = (props) => {
debugger

  // Локальный стейт для отслеживания первого посещения
  const [isMajorHouseFirstVisit, setIsMajorHouseFirstVisit] = useState(true);


  // Эффект для изменения состояния при первом посещении - на основе local storage
  // useEffect(() => {  

  //   const majorHouseHasVisited = localStorage.getItem('Major House Has Visited');

  //   if (!majorHouseHasVisited) { 
  //     localStorage.setItem('Major House Has Visited', 'true'); // Устанавливаем флаг первого посещения 
  //     props.isMajorHouseAttended (true)      
  //   } else {
  //     setIsMajorHouseFirstVisit(false); // Если пользователь уже посещал страницу, обновляем состояние        
  //   }
  // }, [props]);


  // Эффект для изменения состояния при первом посещении - на основе изменения стейта
  useEffect(() => {  

    const majorHouseHasVisited = props.state.attendedLocations[0].isMajorHouseAttended;

    if (!majorHouseHasVisited) { 
      props.isMajorHouseAttended (true)        
    } else {
      setIsMajorHouseFirstVisit(false); // Если пользователь уже посещал страницу, обновляем состояние
        
    }
  }, [props]);
 



  return (
    <div className="locationMajorHouse">
        <div className="CommonBg">
        
      {isMajorHouseFirstVisit ? (
        <>
        <GameNavbar />
        <div className='content'>
        <MajorHouseFirstVisitComponent />        
        </div>
        
        </>
      )  : (
        <>
        <GameNavbar />
        <div className='content'>
        <MajorHouseNextVisitsComponent />
        </div>                     
        </>
      )}
    </div>
    </div>    
  );
};

const MajorHouseFirstVisitComponent = () => {
  return <h1><span style={{color: "pink"}}>Вы посетили дом мэра впервые.</span></h1>;
};

const MajorHouseNextVisitsComponent = () => {
  return <h1><span style={{color: "aqua"}}>Вы ранее уже посещали дом мэра.</span></h1>;
};

export default MajorHouse;



