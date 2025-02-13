import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import LocationItemDots from "./GameMap/LocationItemDots"
import GameMap from "./GameMap/GameMap";

const Bubbles = (props) => {  

    const [step, setStep] = useState(0);
    const [bubbles, setBubbles] = useState([]);
    const messagesEndRef = useRef(null); 
    

    // Загрузка сообщений из localStorage при монтировании
    useEffect(() => {
        const savedBubbles = localStorage.getItem(props.location + ' Chat Messages');
        if (savedBubbles) {
            const parsedBubbles = JSON.parse(savedBubbles);
            setBubbles(parsedBubbles);
            setStep(parsedBubbles.length); // Устанавливаем шаг в соответствии с загруженными сообщениями
        } else {
            // Если нет сохраненных сообщений, добавляем первое сообщение
            const initialBubble = <Bubble key={0} mesId={0}/>;
            setBubbles([initialBubble]);
        }
    }, [props]);

    const onClickNext = (step) => {        
        const newStep = step + 1;
        setStep(newStep);      

        // Создаем новый объект сообщения
        const newBubble = <Bubble key={newStep} mesId={newStep}/>;
        setBubbles(prevBubbles => {
            const updatedBubbles = [...prevBubbles, newBubble];
            localStorage.setItem(props.location + ' Chat Messages', JSON.stringify(updatedBubbles)); // Сохраняем в localStorage
            return updatedBubbles;
        });
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth",  });
    }, [bubbles]);
    
    
    return (
        <>
            {bubbles.map((bubble, step) => (
                <Bubble key={step} mesId={step} textdata={props.textdata}/>
            ))}

            {step < props.textdata.language.dialogs.length ? (
                <button className="btn-gradient-purpblue ml-2" onClick={() => onClickNext(step)}>
                    Next
                </button>
            ) : (
                <AfterDialog
                    key={step}
                    state={props.state}
                    nextAvailableLocs={props.nextAvailableLocs}
                    //title={props.title} 
                    btnText={props.btnText}
                    btnLink={props.btnLink} 
                    //coordinates={props.coordinates}             
                    //isVisited={props.isVisited}
                    flag={props.flag}
                    collectedArtifactKeys={props.collectedArtifactKeys}
                    callbackFunk={props.callbackFunk}
                    setServiceConditions={props.setServiceConditions}
                    conditions={props.conditions}
                    />  
                                  
            )}
            <div ref={messagesEndRef} />
        </>
    );
}


const AfterDialog = (props) => { 
    return (
        <>
            {props.flag.map((f) => {
                switch (f) {
                    case "button":
                        return <Button key={f} link={props.link} btnText={props.btnText} />
                    case "map":
                        return <GameMap key={f} state={props.state} position="relative" upscale={"scale-[200%] hover:scale-[210%] mt-14 mb-20"}/>                                        
                       
                    case "dot":
                        return props.nextAvailableLocs

                            // <LocationItemDots 
                            //     key={f}
                            //     title={props.title} 
                            //     link={props.link} 
                            //     coordinates={props.coordinates}  
                            //     upscale={"scale-[400%]"}           
                            //     isVisited={props.isVisited}                                 
                            // />
                    case "artifact":
                        props.callbackFunk(props.collectedArtifactKeys) 
                        return <></>

                        // return  <ButtonCallback
                        //         key={f}
                        //         collectedArtifactKey={props.collectedArtifactKey}
                        //         callbackFunk={props.callbackFunk}
                        //         btnText={"Take the key"}
                        //         />                           
                               
                    
                    case "condition":
                        return props.setServiceConditions(props.conditions)
                    
                        default:
                        return null;
                }
            })}
        </>
    );
};


const Button = (props) => {
    return (
        <NavLink className="btn-gradient-purpblue ml-2" to={props.btnLink}>
            {props.btnText}
        </NavLink>
    );
};

const ButtonCallback = (props) => {
    return (
        <div onClick={() => props.callbackFunk(props.collectedArtifactKeys)} className="btn-gradient-purpblue ml-2">
            {props.btnText}
        </div>
    );
};


const Bubble = (props) => { 
    const dialog = props.textdata.language.dialogs[props.mesId];    
    if (!dialog) {return null;} // Проверяем, существует ли диалог
    return (
        <>
        <div className={props.textdata.language.dialogs[props.mesId].wrpd}>
            <div className={`dialog-bubble-small ${props.textdata.language.dialogs[props.mesId].bgrd}`}></div>
            <div className={`${props.textdata.language.dialogs[props.mesId].wrpb} ${props.textdata.language.dialogs[props.mesId].bgrd}`}>                            
                <p><strong><span className={props.textdata.language.dialogs[props.mesId].colo}>{props.textdata.language.dialogs[props.mesId].char}</span></strong></p>
                <p>{props.textdata.language.dialogs[props.mesId].text}</p>
                <p>{props.textdata.language.dialogs[props.mesId].btn1}</p>             
            </div>           
        </div>
         
         </>
    );
};
export default Bubbles