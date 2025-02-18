import React, { useState, useEffect } from "react";
import styles from "./MajorsHouse.module.css"
import PrimaryLocationsVisitCheck from "../../utils/PrimaryLocationsVisitCheck";
import Exit from "../../components/Exit";
import stork from "../../../images/Stuff/storkLetter.png"
import windowElement1 from "../../../images/MajorsHouse/MajorsHouseAtticWindowElement1.png"
import windowElement2 from "../../../images/MajorsHouse/MajorsHouseAtticWindowElement2.png"

const Attic = (props) => {
    const currentLocation = "MajorsHouseAttic";
    const nextAvailableLocs = ["ThornyField", "ChurchYard", "MajorsStatue", "SurfersYard", "FarmersHouse"];  
    const artifact = "MajorsLetter";   

    return (
        <main className="">
            
                <PrimaryLocationsVisitCheck
                    state={props.state}
                    setLocationAttendedTrue={props.setLocationAttendedTrue}
                    attendedLocationKey={currentLocation}
                    setLocationAvailableTrue={props.setLocationAvailableTrue}
                    locationsAvailableAtFirstVisitKeys={[]}
                    locationsAvailableAtNextVisitKeys={nextAvailableLocs}
                    switchLocatonVisibility={props.switchLocatonVisibility}
                    switchLocatonVisibilityAtFirstVisitKeys={[]}
                    switchLocatonVisibilityAtNextVisitKeys={[]}
                    destroyLocation={props.destroyLocation}
                    locationstoDestroyAtFirstVisitKeys={[]}
                    locationstoDestroyAtNextVisitKeys={[]}
                    setArtifactCollectedTrue={props.setArtifactCollectedTrue}
                    collectedArtifactKey={artifact}
                    render={(isFirstVisit) => isFirstVisit 
                        ? <AtticVisit state={props.state} currentLocation={currentLocation} nextAvailableLocs={nextAvailableLocs}/> 
                        : <AtticVisit state={props.state} currentLocation={currentLocation} nextAvailableLocs={nextAvailableLocs}/> 
                    }
                />
            
        </main>
    );
}


const AtticVisit = (props) => { 

        //const [isStorkBeenInside, setIsStorkBeenInside] = useState(props.state.serviceConditions.isStorkBeenInside); 
        const [isStorkBeenInside, setIsStorkBeenInside] = useState(false); 
    
        
        return isStorkBeenInside ? 
            <StorkOutside state={props.state} currentLocation={props.currentLocation} isStorkBeenInside={isStorkBeenInside} setIsStorkBeenInside={setIsStorkBeenInside} /> : 
            <StorkInside state={props.state} currentLocation={props.currentLocation} isStorkBeenInside={isStorkBeenInside} setIsStorkBeenInside={setIsStorkBeenInside} />    
        

}

const StorkOutside = (props) => {
  const [animateFly, setAnimateFly] = useState(false); // Для анимации прилёта
  const [animateBounce, setAnimateBounce] = useState(false); // Для bounce-анимации
  const [isAtFinalPosition, setIsAtFinalPosition] = useState(false); // Фиксация конечного положения

  useEffect(() => {
    // Запускаем первую анимацию (прилёт) через 5 секунд
    const flyTimer = setTimeout(() => {
      setAnimateFly(true);

      // Удаляем класс "прилёта" через длительность анимации прилёта (задана в классе .storkFlight)
      const removeFlyClassTimer = setTimeout(() => {
        setAnimateFly(false);
        setIsAtFinalPosition(true); // Фиксируем конечное положение

        // Через 1 секунду после завершения первой анимации запускаем bounce
        const bounceTimer = setTimeout(() => {
          setAnimateBounce(true);

          // Повторяем bounce-анимацию каждые 3 секунды
          const bounceInterval = setInterval(() => {
            setAnimateBounce(false); // Сбрасываем анимацию
            setTimeout(() => setAnimateBounce(true), 10); // Перезапускаем bounce
          }, 3000);

          // Очищаем интервал при размонтировании компонента
          return () => clearInterval(bounceInterval);
        }, 1000);

        return () => clearTimeout(bounceTimer);
      }, 500); // Длительность анимации прилёта

      return () => clearTimeout(removeFlyClassTimer);
    }, 2000);

    // Очищаем таймер при размонтировании компонента
    return () => clearTimeout(flyTimer);
  }, []);
   
    return (
        <main className="">
            <img src={props.state.locationsData[props.currentLocation].cover} className="project-details__cover" alt="cover" />

            <div className="project-details__content w-[460px] h-[250px] top-[10%] left-5">
                <div className="title-3">{props.state.locationsData[props.currentLocation].title}</div>
                <div className="project-details__text">
                    <p>{textdata.language.agenda}</p>
                </div>  
            </div>
            <div className={`w-60 h-60 cursor-pointer fixed ${isAtFinalPosition ? `${styles.finalPositionOutside}` : "bottom-[44%] right-[-250px]"}`}
                     onClick={() => props.setIsStorkBeenInside(true)} />             
            

            <img src={stork} alt="stork"
                    className={`fixed z-[-1]
                    ${isAtFinalPosition ? `${styles.finalPositionOutside}` : "bottom-[44%] right-[-250px]"}
                    ${animateFly ? `${styles.storkFlightOutside}` : ""} 
                    ${animateBounce ? `${styles.storkBounce}` : ""}`}
                />

            <Exit link={"/majors-house/living-room"} text={"Back"} />
        </main>
    );
};



const StorkInside = (props) => {
    const [animateFly, setAnimateFly] = useState(false); // Для анимации прилёта
    const [animateBounce, setAnimateBounce] = useState(false); // Для bounce-анимации
    const [isAtFinalPosition, setIsAtFinalPosition] = useState(false); // Фиксация конечного положения
  
    useEffect(() => {
      // Запускаем первую анимацию (прилёт) через 5 секунд
      const flyTimer = setTimeout(() => {
        setAnimateFly(true);
  
        // Удаляем класс "прилёта" через длительность анимации прилёта (задана в классе .storkFlight)
        const removeFlyClassTimer = setTimeout(() => {
          setAnimateFly(false);
          setIsAtFinalPosition(true); // Фиксируем конечное положение
  
          // Через 1 секунду после завершения первой анимации запускаем bounce
          const bounceTimer = setTimeout(() => {
            setAnimateBounce(true);
  
            // Повторяем bounce-анимацию каждые 3 секунды
            const bounceInterval = setInterval(() => {
              setAnimateBounce(false); // Сбрасываем анимацию
              setTimeout(() => setAnimateBounce(true), 10); // Перезапускаем bounce
            }, 3000);
  
            // Очищаем интервал при размонтировании компонента
            return () => clearInterval(bounceInterval);
          }, 1000);
  
          return () => clearTimeout(bounceTimer);
        }, 1000); // Длительность анимации прилёта
  
        return () => clearTimeout(removeFlyClassTimer);
      }, 1000);
  
      // Очищаем таймер при размонтировании компонента
      return () => clearTimeout(flyTimer);
    }, []);
     
      return (
          <main className="">
              <img src={props.state.locationsData[props.currentLocation].coverVisited} className="project-details__cover" alt="cover" />
              {/* <img src={windowElement1} className="z-[-1] fixed right-48 bottom-1/2 translate-y-1/2" alt="cover" /> */}
              <img src={windowElement2} className="z-[2] fixed right-0 bottom-1/2 translate-y-[60%]" alt="cover" />
  
              <div className="project-details__content w-[460px] h-[250px] top-[10%] left-5">
                  <div className="title-3">{props.state.locationsData[props.currentLocation].title}</div>
                  <div className="project-details__text">
                      {/* <p>{textdata.language.agenda}</p> */}
                  </div>  
              </div>              
  
              <img src={stork} alt="stork"
                      className={`fixed
                      ${isAtFinalPosition ? `${styles.storkFinalPositionInside}` : "bottom-[34%] right-[120px]"}
                      ${animateFly ? `${styles.storkFlightInside}` : ""} 
                      ${animateBounce ? `${styles.storkBounce}` : ""}`}
                  />
  
              <Exit link={"/majors-house/living-room"} text={"Back"} />
          </main>
      );
  };




const textdata = {
    language: 
              {
              agenda: "You decide to start searching without wasting time, look around the house. You don't find anything suspicious in the living room.",
              },
};

export default Attic;
