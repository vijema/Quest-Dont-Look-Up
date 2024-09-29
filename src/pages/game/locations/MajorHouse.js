import { useState, useEffect } from 'react';
import GameNavbar from "./../GameNavbar/GameNavbar"

const MajorHouse = () => {


  // Локальный стейт для отслеживания первого посещения
  const [isMajorHouseFirstVisit, setIsMajorHouseFirstVisit] = useState(true);

  // Эффект для изменения состояния при первом посещении
  useEffect(() => {
    const majorHouseHasVisited = localStorage.getItem('majorHouseHasVisited');
    if (majorHouseHasVisited) {
      setIsMajorHouseFirstVisit(false); // Если пользователь уже посещал страницу, обновляем состояние
    } else {
      localStorage.setItem('majorHouseHasVisited', 'true'); // Устанавливаем флаг первого посещения
    }
  }, []);

  

  return (
    <div className="locationMajorHouse">
        <div className="CommonBg">
        
      {isMajorHouseFirstVisit ? (
        <div className='content'>
        <MajorHouseFirstVisitComponent />
        </div>
      ) : (
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



