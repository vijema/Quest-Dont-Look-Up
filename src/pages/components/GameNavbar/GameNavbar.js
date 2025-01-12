import styles from './GameNavbar.module.css'
import maincss from './../../../styles/main.css'
import { NavLink } from "react-router-dom";
import GameMap from './../GameMap/GameMap'

const GameNavbar = (props) => { 
    
    

    return (
        <main className='w-full bg-stone-900/80 text-white text-sm pt-5 mb-5 flex flex-col items-center absolute bottom-0' >
                      
            <GameMap state={props.state}/> 
            
        </main>
    );
};

export default GameNavbar;