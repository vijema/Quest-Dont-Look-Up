import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { scrollbar } from "../../styles/scrollbar.css";
//import Bubble from "../components/Bubble"

const Start = (props) => { 
    const location = "Start";

    const [step, setStep] = useState(0);
    const [bubbles, setBubbles] = useState([]);
    const messagesEndRef = useRef(null); 

    // Загрузка сообщений из localStorage при монтировании
    useEffect(() => {
        const savedBubbles = localStorage.getItem('chatMessages');
        if (savedBubbles) {
            const parsedBubbles = JSON.parse(savedBubbles);
            setBubbles(parsedBubbles);
            setStep(parsedBubbles.length); // Устанавливаем шаг в соответствии с загруженными сообщениями
        } else {
            // Если нет сохраненных сообщений, добавляем первое сообщение
            const initialBubble = <Bubble mesId={0} key={0} />;
            setBubbles([initialBubble]);
        }
    }, []);

    const onClickNext = (step) => {        
        const newStep = step + 1;
        setStep(newStep);      

        // Создаем новый объект сообщения
        const newBubble = <Bubble mesId={newStep} key={newStep} />;
        setBubbles(prevBubbles => {
            const updatedBubbles = [...prevBubbles, newBubble];
            localStorage.setItem('chatMessages', JSON.stringify(updatedBubbles)); // Сохраняем в localStorage
            return updatedBubbles;
        });
    };
    

      // Прокрутка вниз при обновлении массива сообщений
      useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [bubbles]);
    
    
    return (
        <main className="">
            <img src={props.state.locationsData[location].cover} className="project-details__cover" alt="cover" />

            <div className="project-details__content w-[460px] h-[85vh] top-[10%] right-[2%]">
                <div className="title-3">{props.state.locationsData[location].title}</div>
                <div className="project-details__text">
                    <p>{textdata.language.agenda}</p>
                </div>

                <div className="flex justify-start overflow-hidden overflow-y-auto custom-scrollbar w-[94%]">
                    <div className="dialog-container">                        
                            
                                {bubbles.map((bubble, step) => <Bubble key={step} mesId={step}/>)}

                                {step < textdata.language.dialogs.length ? (
                                <button className="btn-gradient-purpblue ml-2" onClick={() => onClickNext(step)}>
                                    Next
                                </button>
                                  ) : (
                                    <Button />
                                )                            
                                }
                        <div ref={messagesEndRef} />
                    </div>
                </div>
            </div>
        </main>
    );
};

const Button = () => {
    return (
        <NavLink className="btn-gradient-purpblue ml-2" to="/majors-house">
            Visit Major's house
        </NavLink>
    );
};

const Bubble = (props) => {  
    const dialog = textdata.language.dialogs[props.mesId];

    // Проверяем, существует ли диалог
    if (!dialog) {
        return null; // Если диалог не существует, ничего не рендерим
    }

    return (
        <>
        <div className={textdata.language.dialogs[props.mesId].wrpd}>
            <div className={`dialog-bubble-small ${textdata.language.dialogs[props.mesId].bgrd}`}></div>
            <div className={`${textdata.language.dialogs[props.mesId].wrpb} ${textdata.language.dialogs[props.mesId].bgrd}`}>                            
                <p><strong><span className={textdata.language.dialogs[props.mesId].colo}>{textdata.language.dialogs[props.mesId].char}</span></strong></p>
                <p>{textdata.language.dialogs[props.mesId].text}</p>
                <p>{textdata.language.dialogs[props.mesId].btn1}</p>             
            </div>           
        </div>
         
         </>
    );
};

const textdata = {
      language: 
                {
                agenda: "You are heading to Cape Rabbits at the invitation of your old comrade in arms, the founder and mayor of this wonderful town - the retired commander of the elite rabbit SEALs Major Rabbits, nicknamed in this town the Holy Major. During the journey you meet a talkative captain and strike up a conversation with him.",
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
                        {   char: "You",
                            colo: "text-green-700",
                            text: "Wow, seriously?! And why is that?",
                            wrpd: "dialog-wrapper-right",
                            wrpb: "dialog-bubble-right",
                            bgrd: "!bg-lime-200/85",
                        },
                        {   char: "Captain",
                            colo: "text-blue-700",
                            text: "Because there is nothing sacred about him! Judge for yourself - he had barely taken up this post after the death of his predecessor, when, taking advantage of the mayor's absence and the powers that had passed to him, he almost immediately removed my brother from the post of sheriff and appointed that corrupt nonentity Scamini in his place!",
                            wrpd: "dialog-wrapper-left",
                            wrpb: "dialog-bubble-left",
                            bgrd: "",
                        },
                        {   char: "You",
                            colo: "text-green-700",
                            text: "Wait, what? In the absence of the mayor? What do you mean? Where did the mayor go?",
                            wrpd: "dialog-wrapper-right",
                            wrpb: "dialog-bubble-right",
                            bgrd: "!bg-lime-200/85",
                        },
                        {   char: "Captain",
                            colo: "text-blue-700",
                            text: "Oh, it's a very dark story - he disappeared about a month ago - without a trace, without warning anyone. And I bet Scamini is somehow involved in this, along with the new abbot.",
                            wrpd: "dialog-wrapper-left",
                            wrpb: "dialog-bubble-left",
                            bgrd: "",
                        },
                        {   char: "Captain",
                            colo: "text-blue-700",
                            text: "By the way, our mayor is a very good person - the locals love him so much that they even erected a statue in his honor while he was still alive! Also a local landmark. People also say that it has some kind of secret.",
                            wrpd: "dialog-wrapper-left",
                            wrpb: "dialog-bubble-left",
                            bgrd: "",                        
                        },
                        
                    ],
                 },
};

export default Start;
