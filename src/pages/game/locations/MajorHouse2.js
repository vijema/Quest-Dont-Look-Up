import { useState } from 'react';
import GameNavbar from "./../GameNavbar/GameNavbar"
//import {hasVisited} from "./../../Welcome"


const MajorHouse = () => {

  // Локальный стейт для отслеживания первого посещения
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  

  
  const hasVisited = localStorage.getItem('hasVisited');
    if (hasVisited) {
      setIsFirstVisit(false); // Если пользователь уже посещал страницу, обновляем состояние
      
    } else {
      localStorage.setItem('hasVisited', 'true'); // Устанавливаем флаг первого посещения
    } 
  

  return (
    <div className="locationMajorHouse">
        <div className="CommonBg">
      {isFirstVisit ? (
        <FirstVisitComponent />
      ) : (
        <>
        <GameNavbar />
        <SubsequentVisitComponent />
        </>
      )}
    </div>
    </div>
  );
};

const FirstVisitComponent = () => {
  return <h1>Вы посетили дом мэра впервые.</h1>;
};

const SubsequentVisitComponent = () => {
  return <h1>Вы ранее уже посещали дом мэра.</h1>;
};

export default MajorHouse;



