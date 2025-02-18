import { Routes, Route } from "react-router-dom";
import PrimaryLocationsVisitCheck from "../../utils/PrimaryLocationsVisitCheck";
import LocationItemDots from "../../components/GameMap/LocationItemDots";
import Bubbles from "../../components/Bubbles";
import LocalNavigation from "../../utils/LocalNavigation";

const TheCity = (props) => {      

    return  (
        <Routes>
          <Route path="main-spot" element={<MainSpot 
          state={props.state}
          setLocationAttendedTrue={props.setLocationAttendedTrue}
          setLocationAvailableTrue={props.setLocationAvailableTrue}
          switchLocatonVisibility={props.switchLocatonVisibility}
          destroyLocation={props.destroyLocation}
          setArtifactCollectedTrue={props.setArtifactCollectedTrue}
          setServiceConditions={props.setServiceConditions}  
          />} />
          <Route path="morpheus-kiosk" element={<MorpheusKiosk 
          state={props.state}
          setLocationAttendedTrue={props.setLocationAttendedTrue}
          setLocationAvailableTrue={props.setLocationAvailableTrue}
          switchLocatonVisibility={props.switchLocatonVisibility}
          destroyLocation={props.destroyLocation}
          setArtifactCollectedTrue={props.setArtifactCollectedTrue}
          setServiceConditions={props.setServiceConditions}  
          />} />
          <Route path="thorny-field" element={<ThornyField 
          state={props.state}
          setLocationAttendedTrue={props.setLocationAttendedTrue}
          setLocationAvailableTrue={props.setLocationAvailableTrue}
          switchLocatonVisibility={props.switchLocatonVisibility}
          destroyLocation={props.destroyLocation}
          setArtifactCollectedTrue={props.setArtifactCollectedTrue}
          setServiceConditions={props.setServiceConditions}  
          />} />
        </Routes>
      );
}
    
const MainSpot = (props) => {
    const currentLocation = "TheCity";
    const nextAvailableLocs = ["MorpheusKiosk", "ThornyField"];  
    
    return(
        <main className="">
            
                <PrimaryLocationsVisitCheck
                    state={props.state}
                    setLocationAttendedTrue={props.setLocationAttendedTrue}
                    attendedLocationKey={currentLocation}
                    setLocationAvailableTrue={props.setLocationAvailableTrue}
                    locationsAvailableAtFirstVisitKeys={nextAvailableLocs}
                    locationsAvailableAtNextVisitKeys={[]}
                    switchLocatonVisibility={props.switchLocatonVisibility}
                    switchLocatonVisibilityAtFirstVisitKeys={[]}
                    switchLocatonVisibilityAtNextVisitKeys={[]}
                    destroyLocation={props.destroyLocation}
                    locationstoDestroyAtFirstVisitKeys={[]}
                    locationstoDestroyAtNextVisitKeys={[]}
                    setArtifactCollectedTrue={props.setArtifactCollectedTrue}                    
                    render={(isFirstVisit) => isFirstVisit 
                        ? <MainSpotFirstVisitComponent state={props.state} currentLocation={currentLocation} nextAvailableLocs={nextAvailableLocs}/> 
                        : <MainSpotFirstVisitComponent 
                                state={props.state} 
                                currentLocation={currentLocation} 
                                nextAvailableLocs={nextAvailableLocs}
                                //collectedArtifactKeys={artifacts}
                                callbackFunk={props.setArtifactCollectedTrue}  
                                setServiceConditions={props.setServiceConditions}                               
                          />
                    }
                />
            
        </main>
    );
};


const MainSpotFirstVisitComponent = (props) => { //Arrival to the City
    
    return (
            <div className="project-details-col">                
                <img src={props.state.locationsData[props.currentLocation].cover} className="project-details__cover" alt="cover" />
                <div className="project-details__content w-[460px] h-[200px] top-[10%] right-[2%]">
                    <div className="title-3">{props.state.locationsData[props.currentLocation].title}</div>
                    <div className="project-details__text">
                        <span style={{ color: "aqua" }}>{textdata.language.agendaFirst}</span>
                    </div>
                                        
                    <NextAvailableLocs state={props.state} currentLocation={props.currentLocation} nextAvailableLocs={props.nextAvailableLocs}/>

                </div>
            </div>
        );
    }

const MainSpotNextVisitComponent = (props) => { //
   return (
           <div className="project-details-col">
               <img src={props.state.locationsData[props.currentLocation].cover} className="project-details__cover" alt="cover" />
               <div className="project-details__content w-[460px] h-[200px] top-[10%] right-[2%]">
                   <div className="title-3">{props.state.locationsData[props.currentLocation].title}</div>
                   <div className="project-details__text">
                       <span style={{ color: "aqua" }}>{textdata.language.agendaFirst}</span>
                   </div>
                                       
                   <NextAvailableLocs state={props.state} currentLocation={props.currentLocation} nextAvailableLocs={props.nextAvailableLocs}/>
               </div>
           </div>
       );
   }


const NextAvailableLocs = (props) => { 
    return (
        <>   
        <LocalNavigation state={props.state} upscale={"scale-[400%]"} subLoc={"isCitySubloc"} />   
        </>
    );
}



const MorpheusKiosk = (props) => {
    const currentLocation = "MorpheusKiosk";     
    
    return(
        <main className="">
            
                <PrimaryLocationsVisitCheck
                    state={props.state}
                    setLocationAttendedTrue={props.setLocationAttendedTrue}
                    attendedLocationKey={currentLocation}
                    setLocationAvailableTrue={props.setLocationAvailableTrue}
                    locationsAvailableAtFirstVisitKeys={[]}
                    locationsAvailableAtNextVisitKeys={[]}
                    switchLocatonVisibility={props.switchLocatonVisibility}
                    switchLocatonVisibilityAtFirstVisitKeys={[]}
                    switchLocatonVisibilityAtNextVisitKeys={[]}
                    destroyLocation={props.destroyLocation}
                    locationstoDestroyAtFirstVisitKeys={[]}
                    locationstoDestroyAtNextVisitKeys={[]}
                    setArtifactCollectedTrue={props.setArtifactCollectedTrue}                    
                    render={(isFirstVisit) => isFirstVisit 
                        ? <MorpheusKioskFirstVisitComponent state={props.state} currentLocation={currentLocation} 
                            //nextAvailableLocs={nextAvailableLocs}
                        /> 
                        : <MorpheusKioskFirstVisitComponent 
                                state={props.state} 
                                currentLocation={currentLocation} 
                                //nextAvailableLocs={nextAvailableLocs}
                                //collectedArtifactKeys={artifacts}
                                callbackFunk={props.setArtifactCollectedTrue}  
                                setServiceConditions={props.setServiceConditions}                               
                          /> 
                    }
                />
            
        </main>
    );
};

const MorpheusKioskFirstVisitComponent = (props) => { //
    
    return (
            <div className="project-details-col">
                <img src={props.state.locationsData[props.currentLocation].cover} className="project-details__cover" alt="cover" />
                <div className="project-details__content w-[460px] h-[200px] top-[10%] right-[2%]">
                    <div className="title-3">{props.state.locationsData[props.currentLocation].title}</div>
                    <div className="project-details__text">
                        <span style={{ color: "aqua" }}>{textdata.language.agendaFirst}</span>
                    </div>
                                        
                    <NextAvailableLocs state={props.state} currentLocation={props.currentLocation} nextAvailableLocs={props.nextAvailableLocs}/>

                </div>
            </div>
        );
    }




const ThornyField = (props) => {
        const currentLocation = "ThornyField";
         
        
        return(
            <main className="">
                
                    <PrimaryLocationsVisitCheck
                        state={props.state}
                        setLocationAttendedTrue={props.setLocationAttendedTrue}
                        attendedLocationKey={currentLocation}
                        setLocationAvailableTrue={props.setLocationAvailableTrue}
                        locationsAvailableAtFirstVisitKeys={[]}
                        locationsAvailableAtNextVisitKeys={[]}
                        switchLocatonVisibility={props.switchLocatonVisibility}
                        switchLocatonVisibilityAtFirstVisitKeys={[]}
                        switchLocatonVisibilityAtNextVisitKeys={[]}
                        destroyLocation={props.destroyLocation}
                        locationstoDestroyAtFirstVisitKeys={[]}
                        locationstoDestroyAtNextVisitKeys={[]}
                        setArtifactCollectedTrue={props.setArtifactCollectedTrue}                       
                        render={(isFirstVisit) => isFirstVisit 
                            ? <ThornyFieldFirstVisitComponent state={props.state} currentLocation={currentLocation} 
                                //nextAvailableLocs={nextAvailableLocs}
                                /> 
                            : <ThornyFieldFirstVisitComponent 
                                    state={props.state} 
                                    currentLocation={currentLocation} 
                                    //nextAvailableLocs={nextAvailableLocs}
                                    //collectedArtifactKeys={artifacts}
                                    callbackFunk={props.setArtifactCollectedTrue}  
                                    setServiceConditions={props.setServiceConditions}                               
                              /> 
                        }
                    />
                
            </main>
        );
    };
    
    const ThornyFieldFirstVisitComponent = (props) => { //Arrival to Bay Area
        
        return (
                <div className="project-details-col">
                    <img src={props.state.locationsData[props.currentLocation].cover} className="project-details__cover" alt="cover" />
                    <div className="project-details__content w-[460px] h-[200px] top-[10%] right-[2%]">
                        <div className="title-3">{props.state.locationsData[props.currentLocation].title}</div>
                        <div className="project-details__text">
                            <span style={{ color: "aqua" }}>{textdata.language.agendaFirst}</span>
                        </div>
                                            
                        <NextAvailableLocs state={props.state} currentLocation={props.currentLocation} nextAvailableLocs={props.nextAvailableLocs}/>
    
                    </div>
                </div>
            );
        }












const CityNextVisitsComponent = (props) => { // Talk to Gardener
    if (props.state.serviceConditions.isToldToGardener === false && props.state.locationsData.MajorsHouse.isAttended === false) {
        return <MainSpotFirstVisitComponent state={props.state} currentLocation={props.currentLocation} nextAvailableLocs={props.nextAvailableLocs} />;
    } else if (props.state.serviceConditions.isToldToGardener === false && props.state.locationsData.MajorsHouse.isAttended === true) {
        return (
            <main>
                <img src={props.state.locationsData[props.currentLocation].coverVisited} className="project-details__cover" alt="cover" />
                <div className="project-details__content w-[460px] h-[85vh] top-[10%] right-[2%]">
                    <div className="title-3">{props.state.locationsData[props.currentLocation].title}</div>
                    <div className="project-details__text">
                        <p>{textdata.language.agenda}</p>
                    </div>
                    <div className="flex justify-start overflow-hidden overflow-y-auto custom-scrollbar w-[94%]">
                        <div className="dialog-container">
                            <Bubbles
                                state={props.state}
                                textdata={textdata}
                                location={props.currentLocation}
                                title={props.state.locationsData[props.currentLocation].title + " (You are here)"}
                                coordinates={"!fixed top-[36%] left-[60%]"}
                                nextAvailableLocs={
                                    <NextAvailableLocs
                                        state={props.state}
                                        currentLocation={props.currentLocation}
                                        nextAvailableLocs={props.nextAvailableLocs}
                                    />
                                }
                                flag={["artifact", "dot", "condition"]}
                                collectedArtifactKeys={props.collectedArtifactKeys}
                                callbackFunk={props.callbackFunk}
                                setServiceConditions={props.setServiceConditions}
                                conditions={["isToldToGardener", "isToldToFarmer"]}
                            />
                            <LocationItemDots
                                title={props.state.locationsData[props.currentLocation].title + " (You are here)"}
                                upscale={"scale-[400%]"}
                                coordinates={"!fixed top-[82%] left-[38%]"}
                                isVisited={"true"}
                            />
                        </div>
                    </div>
                </div>
            </main>
        );
    } else { // Other visits with no Gardener
        return (
            <div className="project-details-col">
                <img src={props.state.locationsData[props.currentLocation].coverReVisited} className="project-details__cover" alt="cover" />
                <div className="project-details__content w-[460px] h-[200px] top-[10%] right-[2%]">
                    <div className="title-3">{props.state.locationsData[props.currentLocation].title}</div>
                    <div className="project-details__text">
                        <span style={{ color: "aqua" }}>{textdata.language.agendaVisited}</span>
                    </div>
                    <LocationItemDots
                        title={props.state.locationsData[props.currentLocation].title + " (You are here)"}
                        upscale={"scale-[400%]"}
                        coordinates={"!fixed top-[82%] left-[38%]"}
                        isVisited={"true"}
                    />

                    <NextAvailableLocs state={props.state} currentLocation={props.currentLocation} nextAvailableLocs={props.nextAvailableLocs} />
                </div>
            </div>
        );
    }
};




const textdata = {
    language: 
              {
              agenda: "The City.",
              agendaFirst: "This is your first visit of the City.",
              agendaVisited: "UYou are back in the City.",
              dialogs: [
                      {   char: "Gardener",
                          colo: "text-blue-700",
                          text: "Hey, buddy! You must be a Major's friend he had been talking about so many times?!",
                          wrpd: "dialog-wrapper-left",
                          wrpb: "dialog-bubble-left",
                          bgrd: "",                            
                      },
                      {   char: "You",
                          colo: "text-green-700",
                          text: "Hey! Looks like I am! But Captain has just told me Major is disappeared. If might be you know where he is?",
                          wrpd: "dialog-wrapper-right",
                          wrpb: "dialog-bubble-right",
                          bgrd: "!bg-lime-200/85",
                      },                     
                    
                  ],
               },
};

export default TheCity;
