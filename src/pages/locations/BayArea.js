import { NavLink } from "react-router-dom";
import PrimaryLocationsVisitCheck from "../utils/PrimaryLocationsVisitCheck";
import LocationItemDots from "../components/GameMap/LocationItemDots";
import Bubbles from "../components/Bubbles";

const BayArea = (props) => {
    const currentLocation = "BayArea";
    const nextAvailableLocs = ["MajorsHouse"];
    const artifact = "MajorsHouseKey";

    return (
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
                    collectedArtifactKey={artifact}
                    render={(isFirstVisit) => isFirstVisit 
                        ? <BayAreaFirstVisitComponent state={props.state} currentLocation={currentLocation} nextAvailableLocs={nextAvailableLocs}/> 
                        : <BayAreaNextVisitsComponent 
                                state={props.state} 
                                currentLocation={currentLocation} 
                                nextAvailableLocs={nextAvailableLocs}
                                collectedArtifactKey={artifact}
                                callbackFunk={props.setArtifactCollectedTrue}                                
                          /> 
                    }
                />
            
        </main>
    );
};


const BayAreaFirstVisitComponent = (props) => {
    return (
            <div className="project-details-col">
                <img src={props.state.locationsData[props.currentLocation].cover} className="project-details__cover" alt="cover" />
                <div className="project-details__content w-[460px] h-[200px] top-[10%] right-[2%]">
                    <div className="title-3">{props.state.locationsData[props.currentLocation].title}</div>
                    <div className="project-details__text">
                        <span style={{ color: "aqua" }}>{textdata.language.agendaFirst}</span>
                    </div>
                    

                    <LocationItemDots  
                        title={props.state.locationsData[props.currentLocation].title + " (You are here)"}                      
                        upscale={"scale-[400%]"}  
                        coordinates={"!fixed top-[82%] left-[38%]"}
                        isVisited={"true"}
                    />
                    
                    <NextAvailableLocs state={props.state} currentLocation={props.currentLocation} nextAvailableLocs={props.nextAvailableLocs}/>

                </div>
            </div>
        );
    }


const NextAvailableLocs = (props) => { 
    return (
        <>            
            <LocationItemDots
                title={props.state.locationsData[props.nextAvailableLocs[0]].title}
                link={props.state.locationsData[props.nextAvailableLocs[0]].link}
                upscale={"scale-[400%]"}
                coordinates={"!fixed top-[36%] left-[60%]"}
                isVisited={props.state.locationsData[props.nextAvailableLocs[0]].isAttended}
            />
        </>
    );
}

const BayAreaNextVisitsComponent = (props) => {    

    if (props.state.collectedArtifacts.MajorsHouseKey.isCollected === false) {
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
                            flag={["artifact", "dot"]}
                            collectedArtifactKey={props.collectedArtifactKey}
                            callbackFunk={props.callbackFunk}
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
    } else {
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

                    <NextAvailableLocs state={props.state} currentLocation={props.currentLocation} nextAvailableLocs={props.nextAvailableLocs}/>                 

                </div>
            </div>
        ); 
    }
};




const textdata = {
    language: 
              {
              agenda: "The Mayor's house is located right on the coast. As expected, no one answers when you knock. Suddenly you are noticed by the Mayor's neighbor - a local gardener.",
              agendaFirst: "Ваш первый визит в Bay- Area",
              agendaVisited: "Вы снова на берегу",
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
                      {   char: "Gardener",
                          colo: "text-blue-700",
                          text: "Oh yes, thats true! Unfortunately there has been no news about his fate for a couple of months already!",
                          wrpd: "dialog-wrapper-left",
                          wrpb: "dialog-bubble-left",
                          bgrd: "",
                      },
                      {   char: "Gardener",
                          colo: "text-blue-700",
                          text: "Rabbits say the last person to see him was a local shopkeeper who says that allegedly saw the Mayor flying away from a local airfield in a hot air balloon with some lady.",
                          wrpd: "dialog-wrapper-left",
                          wrpb: "dialog-bubble-left",
                          bgrd: "",
                      },  
                    //   {   char: "You",
                    //       colo: "text-green-700",
                    //       text: "It's strange... To disappear like that without saying a word to anyone is not at all in the Mayor's spirit... Has anyone contacted the police?",
                    //       wrpd: "dialog-wrapper-right",
                    //       wrpb: "dialog-bubble-right",
                    //       bgrd: "!bg-lime-200/85",
                    //   },
                    //   {   char: "Gardener",
                    //       colo: "text-blue-700",
                    //       text: "The police came several times, searched the house, but they say that they have not found any leads yet.",
                    //       wrpd: "dialog-wrapper-left",
                    //       wrpb: "dialog-bubble-left",
                    //       bgrd: "",
                    //   },
                    //   {   char: "You",
                    //       colo: "text-green-700",
                    //       text: "It's really strange... Might be you can remember anythig else?",
                    //       wrpd: "dialog-wrapper-right",
                    //       wrpb: "dialog-bubble-right",
                    //       bgrd: "!bg-lime-200/85",
                    //   },
                    //   {   char: "Gardener",
                    //       colo: "text-blue-700",
                    //       text: "Wish I would but I don't know anythig else but I'm just a gardener who picks apples all day long :((",
                    //       wrpd: "dialog-wrapper-left",
                    //       wrpb: "dialog-bubble-left",
                    //       bgrd: "",
                    //   },
                    //   {   char: "You",
                    //       colo: "text-green-700",
                    //       text: "Oh don't worry, thank you very much anyway. At last I know where to start the search. Well, se you",
                    //       wrpd: "dialog-wrapper-right",
                    //       wrpb: "dialog-bubble-right",
                    //       bgrd: "!bg-lime-200/85",
                    //   },
                    //   {   char: "Gardener",
                    //       colo: "text-blue-700",
                    //       text: "Oh wait! Before disappearing Major warned me about your possible visit and asked me to give you the keys from his house!",
                    //       wrpd: "dialog-wrapper-left",
                    //       wrpb: "dialog-bubble-left",
                    //       bgrd: "",
                    //   },
                  ],
               },
};

export default BayArea;
