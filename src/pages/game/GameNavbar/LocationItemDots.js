import { NavLink } from 'react-router-dom';
import styles from './GameNavbar.module.css'
import { useState } from 'react';



const LocationItemDots = (props) => {   
    
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <>      
            <div className={`flex flex-col items-center absolute ${props.coordinates}`}>
                <div className='relative'>{showTooltip && <p className={styles.tooltip}>{props.title}</p>}</div>              
                <NavLink to={props.link}  className={({ isActive }) => {
        console.log(`Link to ${props.link} isActive: ${isActive}`);
        return isActive ? `${styles.mapdotactive}` : `${styles.mapdot}`;
    }}   onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}></NavLink>                      
                
            </div>
        </>
    );
};

export default LocationItemDots;