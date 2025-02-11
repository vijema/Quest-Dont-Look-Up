import { useState, useEffect } from 'react';


const PrimaryLocationsVisitCheck = (props) => { 
    
  // Локальный стейт для отслеживания первого посещения
  const [islocationFirstVisit, setIslocationFirstVisit] = useState(!props.state.locationsData[props.attendedLocationKey].isAttended); 
  const [isLoading, setIsLoading] = useState(true); // Состояние загрузки

  // Эффект для изменения состояния при первом посещении - на основе изменения стейта
  useEffect(() => {  
    const attendedLocationKey = props.attendedLocationKey;
    const locationHasVisited = !islocationFirstVisit;      

    if (!locationHasVisited) {        
      props.setLocationAttendedTrue(attendedLocationKey)
      props.setLocationAvailableTrue(props.locationsAvailableAtFirstVisitKeys)
      props.switchLocatonVisibility(props.switchLocatonVisibilityAtFirstVisitKeys)
      props.destroyLocation(props.locationstoDestroyAtFirstVisitKeys)        
    } else {
      props.setLocationAvailableTrue(props.locationsAvailableAtNextVisitKeys)
      props.switchLocatonVisibility(props.switchLocatonVisibilityAtNextVisitKeys)
      props.destroyLocation(props.locationstoDestroyAtNextVisitKeys)   
      setIslocationFirstVisit(false); // Если пользователь уже посещал страницу, обновляем состояние    
      }

      setIsLoading(false);

      
  }, [props, islocationFirstVisit]);

  if (isLoading) {
    return null;
  }

  return props.render(islocationFirstVisit);
};



export default PrimaryLocationsVisitCheck;
          



