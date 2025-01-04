import { useState, useEffect } from 'react';
import GameNavbar from "./../GameNavbar/GameNavbar"
import PrimaryLocationsVisitCheck from "../utils/PrimaryLocationsVisitCheck"

const FarmersHouse = (props) => {

  return (
    <div className="locationMajorHouse">
      <div className="CommonBg">
        <GameNavbar />
        <PrimaryLocationsVisitCheck 
          state={props.state} 
          isLocationAttendedTrue={props.isLocationAttendedTrue}
          locationKey={'FarmersHouse'} 
          render={(isFirstVisit) => (
            <div className='content'>
              {isFirstVisit ? <FarmersHouseFirstVisitComponent /> : <FarmersHouseNextVisitsComponent />}
            </div>
          )}
        />
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



