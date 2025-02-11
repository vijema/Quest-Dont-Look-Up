import { NavLink } from "react-router-dom";
import Bubbles from "../components/Bubbles"
import LocationItemDots from "../components/GameMap/LocationItemDots";
import PrimaryLocationsVisitCheck from "../utils/PrimaryLocationsVisitCheck";

const Start = (props) => {  
    const currentLocation = "Start";
    const nextAvailableLocs = ["BayArea"];    
    return ( 
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
                    //collectedArtifactKey={artifact}
                    render={(isFirstVisit) => isFirstVisit 
                        ? <StartFirstVisitComponent state={props.state} currentLocation={currentLocation} nextAvailableLocs={nextAvailableLocs}/> 
                        : <StartNextVisitsComponent state={props.state} currentLocation={currentLocation} nextAvailableLocs={nextAvailableLocs}/> 
                    }
                />
    );
};

const StartFirstVisitComponent = (props) => {  
    
    return (
        <main>
            <img src={props.state.locationsData[props.currentLocation].cover} className="project-details__cover" alt="cover" />

            <div className="project-details__content w-[460px] h-[85vh] top-[10%] right-[2%]">
                <div className="title-3">{props.state.locationsData[props.currentLocation].title}</div>
                <div className="project-details__text">
                    <p>{textdata.language.agenda}</p>
                </div>

                <div className="flex justify-start overflow-hidden overflow-y-auto custom-scrollbar w-[94%]">
                    <div className="dialog-container">
                        <Bubbles state={props.state}
                                 textdata={textdata} 
                                 location={props.currentLocation} 
                                 title={props.state.locationsData[props.currentLocation].title + " (You are here)"}
                                 coordinates={"!fixed top-[36%] left-[60%]"}                                
                                 nextAvailableLocs={<NextAvailableLocs state={props.state} currentLocation={props.currentLocation} nextAvailableLocs={props.nextAvailableLocs}/>}
                                 flag={["map", "dot"]}                                 
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};

const NextAvailableLocs = (props) => { 

    return (
        <>
            <LocationItemDots
                title={props.state.locationsData[props.currentLocation].title + " (You are here)"}
                upscale={"scale-[400%]"}
                coordinates={"!fixed top-[87%] left-[44%]"}
                isVisited={props.state.locationsData[props.currentLocation].isAttended}
            />
            <LocationItemDots
                title={props.state.locationsData[props.nextAvailableLocs[0]].title}
                link={props.state.locationsData[props.nextAvailableLocs[0]].link}
                upscale={"scale-[400%]"}
                coordinates={"!fixed top-[42%] left-[34%]"}
                isVisited={props.state.locationsData[props.nextAvailableLocs[0]].isAttended}
            />
        </>
    );
}


const StartNextVisitsComponent = (props) => {  
    
    return (
        <main className="">
            <img src={props.state.locationsData[props.currentLocation].coverVisited} className="project-details__cover" alt="cover" />

            <div className="project-details__content w-[460px] h-[265px] top-[10%] right-[2%]">
                <div className="title-3">{props.state.locationsData[props.currentLocation].titleAlt}</div>
                <div className="project-details__text">
                        <p>{textdata.language.agendaVisited}</p>
                </div>
                <NavLink className="btn-gradient-purpblue ml-2" to="/bay-area">
                        Got it. Back to Bay Area
                </NavLink>

                <NextAvailableLocs state={props.state} currentLocation={props.currentLocation} nextAvailableLocs={props.nextAvailableLocs}/> 

            </div>
        </main>
    );
};

const textdata = {
      language: 
                {
                agenda: "You are heading to Cape Rabbits at the invitation of your old comrade in arms, the founder and mayor of this wonderful town - the retired commander of the elite rabbit SEALs Major Rabbits, nicknamed in this town the Holy Major. During the journey you meet a talkative captain and strike up a conversation with him.",
                agendaVisited: "Unfortunately, the Captain is currently on a voyage and you won't be able to talk to him.",
                dialogs: [
                        {   char: "Captain",
                            colo: "text-blue-700",
                            text: "Hey, buddy! Never seen you before! Welcome to Cape Rabbits! Are you for a first time in our cozy town?!",
                            wrpd: "dialog-wrapper-left",
                            wrpb: "dialog-bubble-left",
                            bgrd: "",                            
                        },
                        {   char: "You",
                            colo: "text-green-700",
                            text: "Hi cap! Thanks! Yeah, that's my first visit!",
                            wrpd: "dialog-wrapper-right",
                            wrpb: "dialog-bubble-right",
                            bgrd: "!bg-lime-200/85",
                        },
                        {   char: "Captain",
                            colo: "text-blue-700",
                            text: "Well, my friend, you will like it for sure! We have planty of curiousities in here! For example, do you see that lighthouse overthere? It is Point Bunnita! One of my brothers, Beacon, works there! By the way, he used to work as a local sheriff",
                            wrpd: "dialog-wrapper-left",
                            wrpb: "dialog-bubble-left",
                            bgrd: "",
                        },
                        {   char: "Captain",
                            colo: "text-blue-700",
                            text: "And we also have a magnificent old Orthodox church here! True, its new rector, may God forgive me, is a real bastard!",
                            wrpd: "dialog-wrapper-left",
                            wrpb: "dialog-bubble-left",
                            bgrd: "",
                        },
                        // {   char: "You",
                        //     colo: "text-green-700",
                        //     text: "Wow, seriously?! And why is that?",
                        //     wrpd: "dialog-wrapper-right",
                        //     wrpb: "dialog-bubble-right",
                        //     bgrd: "!bg-lime-200/85",
                        // },
                        // {   char: "Captain",
                        //     colo: "text-blue-700",
                        //     text: "Because there is nothing sacred about him! Judge for yourself - he had barely taken up this post after the death of his predecessor, when, taking advantage of the mayor's absence and the powers that had passed to him, he almost immediately removed my brother from the post of sheriff and appointed that corrupt nonentity Scamini in his place!",
                        //     wrpd: "dialog-wrapper-left",
                        //     wrpb: "dialog-bubble-left",
                        //     bgrd: "",
                        // },
                        // {   char: "You",
                        //     colo: "text-green-700",
                        //     text: "Wait, what? In the absence of the mayor? What do you mean? Where did the mayor go?",
                        //     wrpd: "dialog-wrapper-right",
                        //     wrpb: "dialog-bubble-right",
                        //     bgrd: "!bg-lime-200/85",
                        // },
                        // {   char: "Captain",
                        //     colo: "text-blue-700",
                        //     text: "Oh, it's a very dark story - he disappeared about a month ago - without a trace, without warning anyone. And I bet Scamini is somehow involved in this, along with the new abbot.",
                        //     wrpd: "dialog-wrapper-left",
                        //     wrpb: "dialog-bubble-left",
                        //     bgrd: "",
                        // },
                        // {   char: "Captain",
                        //     colo: "text-blue-700",
                        //     text: "By the way, our mayor is a very good person - the locals love him so much that they even erected a statue in his honor while he was still alive! Also a local landmark. People also say that it has some kind of secret.",
                        //     wrpd: "dialog-wrapper-left",
                        //     wrpb: "dialog-bubble-left",
                        //     bgrd: "",                        
                        // },
                        
                    ],
                 },
};


export default Start;
