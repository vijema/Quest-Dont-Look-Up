import { useState } from 'react';
import GameNavbar from "./../GameNavbar/GameNavbar"



const MajorHouse = () => {

  // Локальный стейт для отслеживания первого посещения
  const [isMajorHouseFirstVisit, setIsMajorHouseFirstVisit] = useState(true);
  

  
  const majorHouseHasVisited = localStorage.getItem('majorHouseHasVisited');
    if (majorHouseHasVisited) {
      setIsMajorHouseFirstVisit(false); // Если пользователь уже посещал страницу, обновляем состояние
      
    } else {
      localStorage.setItem('majorHouseHasVisited', 'true'); // Устанавливаем флаг первого посещения
    } 
  

  return (
    <div className="locationMajorHouse">
        <div className="CommonBg">
      {isMajorHouseFirstVisit ? (
        <MajorHouseFirstVisitComponent />
      ) : (
        <>
        <GameNavbar />
        <MajorHouseNextVisitsComponent />
        </>
      )}
    </div>
    </div>
  );
};

const MajorHouseFirstVisitComponent = () => {
  return <h1>Вы посетили дом мэра впервые.</h1>;
};

const MajorHouseNextVisitsComponent = () => {
  return <h1>Вы ранее уже посещали дом мэра.</h1>;
};

export default MajorHouse;



