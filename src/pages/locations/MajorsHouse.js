import { NavLink } from "react-router-dom";
import PrimaryLocationsVisitCheck from "../utils/PrimaryLocationsVisitCheck";
import LocationItemDots from "../components/GameMap/LocationItemDots";
import Bubbles from "../components/Bubbles";
import Redirect from "../utils/Redirect";
import Exit from "../components/Exit";

const MajorsHouse = (props) => { 
    const currentLocation = "MajorsHouse";
    const nextAvailableLocs = ["MajorsHouseBedroom", "MajorsHouseAttic"];  
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
                        ? <Redirect targetUrl={"/bay-area"} />
                        : <MajorsHouseNextVisitsComponent state={props.state} currentLocation={currentLocation} nextAvailableLocs={nextAvailableLocs}/> 
                    }
                />
            
        </main>
    );
};

const MajorsHouseFirstVisitComponent = (props) => {
    return (
        <Redirect targetUrl={"/bay-area"} />
    );
};

const MajorsHouseNextVisitsComponent = (props) => {

    if (props.state.collectedArtifacts.MajorsHouseKey.isCollected === true) {
    return (
        <main className="">            
            <img src={props.state.locationsData[props.currentLocation].cover} className="project-details__cover" alt="cover" />
            
            <div className="project-details__content w-[460px] h-[250px] top-[10%] left-5">
                <div className="title-3">{props.state.locationsData[props.currentLocation].title}</div>
                <div className="project-details__text">
                    <p>{textdata.language.agenda}</p>
                    {/* <span style={{ color: "aqua" }}>{textdata.language.agenda}</span> */}
                </div>
                               
                <LocationItemDots                        
                        title={props.state.locationsData[props.nextAvailableLocs[0]].title}
                        link={props.state.locationsData[props.nextAvailableLocs[0]].link}
                        upscale={"scale-[400%]"} 
                        coordinates={"!fixed top-[71%] left-[30.5%]"} 
                        isVisited={props.state.locationsData[props.nextAvailableLocs[0]].isAttended}                               
                />
                <LocationItemDots                        
                        title={props.state.locationsData[props.nextAvailableLocs[1]].title}
                        link={props.state.locationsData[props.nextAvailableLocs[1]].link}
                        upscale={"scale-[400%]"} 
                        coordinates={"!fixed top-[31%] left-[68%]"} 
                        isVisited={props.state.locationsData[props.nextAvailableLocs[1]].isAttended}                               
                />
                <Exit link={"/bay-area"} />
            </div>
        </main>
    );} else {
        return <Redirect targetUrl={"/bay-area"} />

    };
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

export default MajorsHouse;
