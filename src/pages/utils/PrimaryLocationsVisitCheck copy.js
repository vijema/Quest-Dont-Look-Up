import { useState, useEffect } from 'react';


const PrimaryLocationsVisitCheck = (props) => { 
    
  // Локальный стейт для отслеживания первого посещения
  const [islocationFirstVisit, setIslocationFirstVisit] = useState(true); 
  const [isLoading, setIsLoading] = useState(true); // Состояние загрузки

  // Эффект для изменения состояния при первом посещении - на основе изменения стейта
  useEffect(() => {  
    const attendedLocationKey = props.attendedLocationKey;
    const locationHasVisited = props.state.locationsData[attendedLocationKey].isAttended;      

    if (!locationHasVisited) { 
      localStorage.setItem(attendedLocationKey + ' has visited', 'true');
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
  }, [props]);

  if (isLoading) {
    return null;
  }

  return props.render(islocationFirstVisit);
};



export default PrimaryLocationsVisitCheck;
          



