import PrimaryLocationsVisitCheck from "../../utils/PrimaryLocationsVisitCheck";
import Exit from "../../components/Exit";

const Bedroom = (props) => { 
    const currentLocation = "MajorsHouseBedroom";
    const nextAvailableLocs = ["MajorsStatue"];  
    const artifact = "StatueKey";

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
                        ? <BedroomFirstVisitsComponent state={props.state} currentLocation={currentLocation} nextAvailableLocs={nextAvailableLocs}/> 
                        : <BedroomFirstVisitsComponent state={props.state} currentLocation={currentLocation} nextAvailableLocs={nextAvailableLocs}/> 
                    }
                />
            
        </main>
    );
};


const BedroomFirstVisitsComponent = (props) => {
   
    return (
        <main className="">            
            <img src={props.state.locationsData[props.currentLocation].cover} className="project-details__cover" alt="cover" />
            
            <div className="project-details__content w-[460px] h-[250px] top-[10%] left-5">
                <div className="title-3">{props.state.locationsData[props.currentLocation].title}</div>
                <div className="project-details__text">
                    <p>{textdata.language.agenda}</p>                    
                </div>
                               
                
                <Exit link={"/majors-house/living-room"} text={"Back"} />
            </div>
        </main>
    )
};


const textdata = {
    language: 
              {
              agenda: "You decide to start searching without wasting time, look around the house. You don't find anything suspicious in the living room.",
              dialogs: [
                      {   char: "Gardener",
                          colo: "text-blue-700",
                          text: "Hey, buddy! You must be a Major's friend he had been talking about so many times?!",
                          wrpd: "dialog-wrapper-left",
                          wrpb: "dialog-bubble-left",
                          bgrd: "",                            
                      }    
                  ],
               },
};

export default Bedroom;
