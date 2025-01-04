import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import GameNavbar from "./../GameNavbar/GameNavbar"
import PrimaryLocationsVisitCheck from "../utils/PrimaryLocationsVisitCheck"

const MajorsHouse = (props) => { 

  debugger
  const additionalLocationKeys = ["Serfers Base", "Beacon Main Door"]

  return (
    <div className="locationMajorHouse">
      <div className="CommonBg">
        <GameNavbar />
        <PrimaryLocationsVisitCheck 
          state={props.state} 
          isLocationAttendedTrue={props.isLocationAttendedTrue}    
          additionalLocationsAttended={props.additionalLocationsAttended}           
          locationKey={'MajorsHouse'} 
          locationKeys={additionalLocationKeys}  
          render={(isFirstVisit) => (
            <div className='content'>
              {isFirstVisit ? <MajorsHouseFirstVisitComponent /> : 
                              <MajorsHouseNextVisitsComponent 
                                  state={props.state} 
                                  isLocationAttendedTrue={props.isLocationAttendedTrue}
                                  
                                  gameNavbarNotify={props.gameNavbarNotify} />}
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

debugger


const MajorsHouseNextVisitsComponent = (props) => {  
  const  RevealLocations = (props) => {
    props.state.locationsData.SerfersBase.isAttended = true;
    props.state.locationsData.Beacon.isAttended = true;
    props.gameNavbarNotify();
    } 
  useEffect(() => {
    RevealLocations(props); 
  }, [props]); 

    return <>
        <h1><span style={{color: "aqua"}}>Вы ранее уже посещали дом мэра.</span></h1>
        <NavLink className="btn" to='/farmers-house'>
                    Visit Farmer's house
        </NavLink>
       </>
};

export default MajorsHouse;



