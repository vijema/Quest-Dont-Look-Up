import { useState, useEffect } from 'react';

const PrimaryLocationsVisitCheck = (props) => {     
  
  const [islocationVisited, setIslocationVisited] = useState(props.state.locationsData[props.attendedLocationKey].isAttended); 
  const [isLoading, setIsLoading] = useState(true);

  // Эффект для изменения состояния при первом посещении - на основе изменения стейта
  useEffect(() => {           

    if (!islocationVisited) { // Первое посещение локации      
      props.setLocationAttendedTrue(props.attendedLocationKey)        
      props.setLocationAvailableTrue(props.locationsAvailableAtFirstVisitKeys)
      props.switchLocatonVisibility(props.switchLocatonVisibilityAtFirstVisitKeys)
      props.destroyLocation(props.locationstoDestroyAtFirstVisitKeys)              
    } else { // Следующее посещение локации       
      props.setLocationAvailableTrue(props.locationsAvailableAtNextVisitKeys)
      props.switchLocatonVisibility(props.switchLocatonVisibilityAtNextVisitKeys)
      props.destroyLocation(props.locationstoDestroyAtNextVisitKeys)    
      setIslocationVisited(true);        
      }

      setIsLoading(false);

      return () => {
        }
      
  }, [props, islocationVisited]);

  if (isLoading) {
    return null;
  }

  return props.render(!islocationVisited);
};

export default PrimaryLocationsVisitCheck;
          



