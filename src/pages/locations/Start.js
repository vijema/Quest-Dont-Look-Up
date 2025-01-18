import { NavLink } from "react-router-dom";

const Start = (props) => {
    const location = "Start";
    return (
        <main className="">            
            <div className="project-details">
                <img src={props.state.locationsData[location].cover} className="project-details__cover" alt="cover" />
               
                <div className="dialogBubbleInside">
                    A couple of months ago the Major disappeared without a trace!
                 </div>                
               
                <div className="project-details__content w-[460px] h-[85vh] top-[10%] right-[2%]">
                    <div className="title-3">{props.state.locationsData[location].title}</div>
                    <div className="project-details__text">
                        <p>
                            You are heading to Cape Rabbits at the invitation of your old comrade in arms, the founder and mayor of this
                            wonderful town - the retired commander of the elite rabbit SEALs Major Rabbits, nicknamed in this town the Holy Major.
                            During the journey you meet a talkative captain and strike up a conversation with him.
                        </p>
                    </div>
                    <NavLink className="btn" to="/majors-house">
                        Visit Major's house
                    </NavLink>   
                    <div className="overflow-hidden overflow-y-auto mt-6">                
                    <div className="dialog-container">
                        <div className="dialog-wrapper-left">
                            <div className="dialogBubbleSmall"></div>
                            <div className="dialogBubbleLeft">
                               <p><span className="!font-black text-blue-700">Captain:</span></p>
                               During the voyage, you meet the captain and he tells you that a couple of months ago the Major disappeared without a
                                trace!
                            </div>
                        </div>
                        <div className="dialog-wrapper-right">                    
                            <div className="dialogBubbleSmall !bg-lime-200/85"></div>
                            <div className="dialogBubbleRight !bg-lime-200/85">
                               <p><span className="!font-black text-green-700">You:</span></p>
                               <p>Hi captain!</p>
                            </div>
                        </div>
                        <div className="dialog-wrapper-left">
                            <div className="dialogBubbleSmall"></div>
                            <div className="dialogBubbleLeft">
                               <p><span className="!font-black text-blue-700">Captain:</span></p>
                               <p>During the voyage, you meet the captain and he tells you that a couple of months ago!</p>
                            </div>
                        </div>
                        <div className="dialog-wrapper-right ">                    
                            <div className="dialogBubbleSmall !bg-lime-200/85"></div>
                            <div className="dialogBubbleRight !bg-lime-200/85">
                               <p><span className="!font-black text-green-700">You:</span></p>
                               <p>Hi captain! that a couple of months ago!</p>
                            </div>
                        </div>
                    </div>  </div>                   
                </div>
            </div>    
        </main>
    );
};

export default Start;
