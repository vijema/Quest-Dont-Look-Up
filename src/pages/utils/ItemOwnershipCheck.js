import { useState, useEffect } from 'react';


const PrimaryLocationsVisitCheck = (props) => {

  const [isOwnItem, setIsOwnItem] = useState(false); 

  // Эффект для изменения состояния при первом посещении - на основе изменения стейта
  useEffect(() => {  
    const collectedArtifactKey = props.collectedArtifactKey;
    const isItemCollected = props.state.collectedArtifacts[collectedArtifactKey].isCollected;     

    if (!isItemCollected) { 
      localStorage.setItem(collectedArtifactKey + ' collected', 'true');
      props.setLocationAttendedTrue(collectedArtifactKey)

      props.setLocationAvailableTrue(props.locationsAvailableAtFirstVisitKeys)
      props.destroyLocation(props.locationstoDestroyAtFirstVisitKeys)        
    } else { 
      props.setLocationAvailableTrue(props.locationsAvailableAtNextVisitKeys)
      props.destroyLocation(props.locationstoDestroyAtNextVisitKeys)   
      setIsOwnItem(true); // Если пользователь уже посещал страницу, обновляем состояние  
      }
  }, [props]);

  return props.render(isOwnItem);
};



export default PrimaryLocationsVisitCheck;
          



