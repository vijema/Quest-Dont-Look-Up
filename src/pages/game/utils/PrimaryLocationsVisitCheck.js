import { useState, useEffect } from 'react';


const PrimaryLocationsVisitCheck = (props) => {

  debugger
  
  // Локальный стейт для отслеживания первого посещения
  const [islocationFirstVisit, setIslocationFirstVisit] = useState(true); 

  // Эффект для изменения состояния при первом посещении - на основе изменения стейта
  useEffect(() => {  
    const locationKey = props.locationKey;
    const locationHasVisited = props.state.locationsData[locationKey].isAttended;    

    if (!locationHasVisited) { 
      localStorage.setItem(locationKey + ' has visited', 'true');
      props.isLocationAttendedTrue (locationKey)        
    } else {
      setIslocationFirstVisit(false); // Если пользователь уже посещал страницу, обновляем состояние
        
    }
  }, [props]);


  return props.render(islocationFirstVisit);
};



export default PrimaryLocationsVisitCheck;



