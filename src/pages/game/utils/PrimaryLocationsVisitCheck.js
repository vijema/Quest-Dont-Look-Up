import { useState, useEffect } from 'react';


const PrimaryLocationsVisitCheck = (props) => {

  
  // Локальный стейт для отслеживания первого посещения
  const [islocationFirstVisit, setIslocationFirstVisit] = useState(true); 

  // Эффект для изменения состояния при первом посещении - на основе изменения стейта
  useEffect(() => {  
    const attendedLocationKey = props.attendedLocationKey;
    const locationHasVisited = props.state.locationsData[attendedLocationKey].isAttended;    
      

    if (!locationHasVisited) { debugger
      localStorage.setItem(attendedLocationKey + ' has visited', 'true');
      props.isLocationAttendedTrue (attendedLocationKey)

      props.isLocationAbailable (props.locationsAbailableAtFirstVisitKey)
      props.destroyLocation (props.locationstoDestroyAtFirstVisitKey)        
    } else { debugger
      props.isLocationAbailable (props.locationsAbailableAtNextVisitKey)
      props.destroyLocation (props.locationstoDestroyAtNextVisitKey)   
      setIslocationFirstVisit(false); // Если пользователь уже посещал страницу, обновляем состояние    
      }
  }, [props]);


  return props.render(islocationFirstVisit);
};



export default PrimaryLocationsVisitCheck;
          



