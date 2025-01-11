import { NavLink } from 'react-router-dom';
import PrimaryLocationsVisitCheck from "../utils/PrimaryLocationsVisitCheck"

const MajorsHouse = (props) => { 

  return (
    <div className="locationMajorHouse">
      <div className="CommonBg">        
        <PrimaryLocationsVisitCheck 
          state={props.state} 
          setLocationAttendedTrue={props.setLocationAttendedTrue}   
          attendedLocationKey={'MajorsHouse'}           
          setLocationAvailableTrue={props.setLocationAvailableTrue}
          locationsAvailableAtFirstVisitKeys={['Beacon']}
          locationsAvailableAtNextVisitKeys={['FarmersHouse']} 
          destroyLocation={props.destroyLocation} 
          locationstoDestroyAtFirstVisitKeys={['WelcomePage']} 
          locationstoDestroyAtNextVisitKeys={[]} 
          render={(isFirstVisit) => (
            <div className='content'>
              {isFirstVisit ? <MajorsHouseFirstVisitComponent /> : <MajorsHouseNextVisitsComponent />}
            </div>
          )}
        />
      </div>
    </div>    
  );
};


const MajorsHouseFirstVisitComponent = () => {
  return <h1><span style={{color: "pink"}}>Вы посетили дом мэра впервые.</span></h1>;
};


const MajorsHouseNextVisitsComponent = (props) => {   

    return <>
        <h1><span style={{color: "aqua"}}>Вы ранее уже посещали дом мэра.</span></h1>
        <NavLink className="btn" to='/farmers-house'>
                    Visit Farmer's house
        </NavLink>
       </>
};

export default MajorsHouse;



