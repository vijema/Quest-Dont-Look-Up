import { NavLink } from 'react-router-dom';
import GameNavbar from "./../GameNavbar/GameNavbar"
import PrimaryLocationsVisitCheck from "../utils/PrimaryLocationsVisitCheck"

const FarmersHouse = (props) => {

  return (
    <div className="locationMajorHouse">
      <div className="CommonBg">        
        <PrimaryLocationsVisitCheck 
          state={props.state} 
          setLocationAttendedTrue={props.setLocationAttendedTrue}
          attendedLocationKey={'FarmersHouse'} 
          setLocationAvailableTrue={props.setLocationAvailableTrue}
          locationsAvailableAtFirstVisitKeys={['SerfersBase', 'MajorsStatue']}
          locationsAvailableAtNextVisitKeys={['WelcomePage']} 
          destroyLocation={props.destroyLocation} 
          locationstoDestroyAtFirstVisitKeys={[]} 
          locationstoDestroyAtNextVisitKeys={['MajorsHouse']}
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



