import { NavLink } from 'react-router-dom';
import styles from './LocationItemDots.module.css'
import React, { useState, useEffect } from 'react';



const LocationItemDots = (props) => {   
    
    const [showTooltip, setShowTooltip] = useState(false);
    

    return (
        <>      
            <div className={`flex flex-col items-center absolute ${props.coordinates}`}>
                <div className='relative'>{showTooltip && <p className={styles.tooltip}>{props.title}</p>}</div>              
                <NavLink to={props.link} className={({ isActive }) => 
                    isActive ? `${styles.mapdotactive}` : props.isVisited ? `${styles.mapdotvisited}` : `${styles.mapdot}`}                          
                         onMouseEnter={() => setShowTooltip(true)} 
                         onMouseLeave={() => setShowTooltip(false)}>
                 </NavLink> 
            </div>
        </>
    );
};

export default LocationItemDots;