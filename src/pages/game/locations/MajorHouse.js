import { useState, useEffect } from 'react';
import GameNavbar from "./../GameNavbar/GameNavbar"
import { redirect } from 'react-router-dom';


const MajorHouse = () => {


  // Локальный стейт для отслеживания первого посещения
  const [isFirstVisit, setIsFirstVisit] = useState(true);

  // Эффект для изменения состояния при первом посещении
  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (hasVisited) {
      setIsFirstVisit(false); // Если пользователь уже посещал страницу, обновляем состояние
    } else {
      localStorage.setItem('hasVisited', 'true'); // Устанавливаем флаг первого посещения
    }
  }, []);

  

  return (
    <div className="locationMajorHouse">
        <div className="CommonBg">
        <div className='content'>
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
    </div>
  );
};

const FirstVisitComponent = () => {
  return <h1><span style={{color: "pink"}}>Вы посетили дом мэра впервые.</span></h1>;
};

const SubsequentVisitComponent = () => {
  return <h1><span style={{color: "aqua"}}>Вы ранее уже посещали дом мэра.</span></h1>;
};

export default MajorHouse;



