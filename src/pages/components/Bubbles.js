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
                    state={props.state}
                    btnText={props.btnText}
                    title={props.title} 
                    link={props.link} 
                    coordinates={props.coordinates}             
                    isVisited={props.isVisited}
                    flag={props.flag}/>                
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
                        return (
                            <LocationItemDots 
                                key={f}
                                upscale={"scale-[400%]"}
                                title={props.title} 
                                link={props.link} 
                                coordinates={props.coordinates}             
                                isVisited={props.isVisited}                                 
                            />
                        );
                    default:
                        return null;
                }
            })}
        </>
    );
};



const MapButton = () => {
    const buttonRef = useRef(null);
    

    const moveButton = () => {
        
        const button = buttonRef.current;

        // Целевые координаты
        const targetPosition = { x: -1000, y: 0 }; // Измените на нужные координаты

        // Устанавливаем начальные стили для анимации        
        //button.style.position = 'relative';
        button.style.transition = 'transform 0.5s ease-in-out';

        // Перемещаем кнопку с помощью transform
        button.style.transform = `translate(${targetPosition.x}px, ${targetPosition.y}px)`;
    };

    return (
        <div style={{ position: 'relative' }}>
            <button 
                ref={buttonRef} 
                className="btn-gradient-purpblue w-36" 
                onClick={moveButton}
            >
                Open map
            </button>
        </div>
    );
};



const MapButton2 = () => {
    const [mapButtonStyles, setMapButtonStyles] = useState('');
  
    return (
        <div className={`${mapButtonStyles}`}>
        <button className="btn-gradient-purpblue w-36"
         onClick={() => setMapButtonStyles('first-appearance-bounce fixed bottom-5 left-5 transition-all ease-in duration-200')}>
                    Open map
                </button>
        </div>
    )
}
    

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