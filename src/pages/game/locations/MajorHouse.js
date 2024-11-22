import { useState, useEffect } from 'react';
import GameNavbar from "./../GameNavbar/GameNavbar"

const MajorsHouse = (props) => {
debugger

  // Локальный стейт для отслеживания первого посещения
  const [isMajorsHouseFirstVisit, setIsMajorsHouseFirstVisit] = useState(true);


  // Эффект для изменения состояния при первом посещении - на основе local storage
  // useEffect(() => {  

  //   const majorsHouseHasVisited = localStorage.getItem('Major House Has Visited');

  //   if (!majorsHouseHasVisited) { 
  //     localStorage.setItem('Major House Has Visited', 'true'); // Устанавливаем флаг первого посещения 
  //     props.isMajorsHouseAttended (true)      
  //   } else {
  //     setIsMajorsHouseFirstVisit(false); // Если пользователь уже посещал страницу, обновляем состояние        
  //   }
  // }, [props]);


  // Эффект для изменения состояния при первом посещении - на основе изменения стейта
  useEffect(() => {  

    const majorsHouseHasVisited = props.state.attendedLocations[0].isMajorsHouseAttended;

    if (!majorsHouseHasVisited) { 
      props.isMajorsHouseAttended (true)        
    } else {
      setIsMajorsHouseFirstVisit(false); // Если пользователь уже посещал страницу, обновляем состояние
        
    }
  }, [props]);
 



  return (
    <div className="locationMajorHouse">
        <div className="CommonBg">
        
      {isMajorsHouseFirstVisit ? (
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
  return <h1><span style={{color: "aqua"}}>Вы ранее уже посещали дом мэра.</span></h1>;
};

export default MajorsHouse;



