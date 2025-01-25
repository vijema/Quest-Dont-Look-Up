import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import LocationItemDots from "../components/GameMap/LocationItemDots"

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
            const initialBubble = <Bubble mesId={0} key={0}/>;
            setBubbles([initialBubble]);
        }
    }, [props]);

    const onClickNext = (step) => {        
        const newStep = step + 1;
        setStep(newStep);      

        // Создаем новый объект сообщения
        const newBubble = <Bubble mesId={newStep} key={newStep}/>;
        setBubbles(prevBubbles => {
            const updatedBubbles = [...prevBubbles, newBubble];
            localStorage.setItem(props.location + ' Chat Messages', JSON.stringify(updatedBubbles)); // Сохраняем в localStorage
            return updatedBubbles;
        });
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
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
                    btnText={props.btnText}
                    title={props.title} 
                    link={props.link} 
                    coordinates={props.coordinates}             
                    isVisited={props.isVisited}
                    flag={props.flag}/>
                // <Button nextPageLink={props.nextPageLink} nextPageName={props.nextPageName} />
            )}
            <div ref={messagesEndRef} />
        </>
    );
}


const AfterDialog = (props) => { switch (props.flag) {
    case "button":
        return  <Button link={props.link} btnText={props.btnText} />;
    case "dot":
        return  <LocationItemDots 
                upscale={"scale-[400%]"}
                title={props.title} 
                link={props.link} 
                coordinates={props.coordinates}             
                isVisited={props.isVisited} 
                />;    
    default:
        return;
    }    
};
    

const Button = (props) => {
    return (
        <NavLink className="btn-gradient-purpblue ml-2" to={props.link}>
            {props.btnText}
        </NavLink>
    );
};


const Bubble = (props) => { 
    const dialog = props.textdata.language.dialogs[props.mesId];

    // Проверяем, существует ли диалог
    if (!dialog) {
        return null; // Если диалог не существует, ничего не рендерим
    }

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