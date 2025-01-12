import { NavLink } from 'react-router-dom';
import styles from './LocationItemDots.module.css'
import React, { useState, useEffect } from 'react';



const LocationItemDots = (props) => {   
    
    const [showTooltip, setShowTooltip] = useState(false);
    const [visitedLinks, setVisitedLinks] = useState(new Set());

    useEffect(() => {
        const visited = JSON.parse(localStorage.getItem('visitedLinks')) || [];
        setVisitedLinks(new Set(visited));
    }, []);

    const handleLinkClick = (link) => {
        const updatedVisitedLinks = new Set(visitedLinks);
        updatedVisitedLinks.add(link);
        setVisitedLinks(updatedVisitedLinks);
        localStorage.setItem('visitedLinks', JSON.stringify(Array.from(updatedVisitedLinks)));
    };

    return (
        <>      
            <div className={`flex flex-col items-center absolute ${props.coordinates}`}>
                <div className='relative'>{showTooltip && <p className={styles.tooltip}>{props.title}</p>}</div>              
                <NavLink to={props.link} className={({ isActive }) => 
                    isActive ? `${styles.mapdotactive}` : visitedLinks.has(props.link) ? `${styles.mapdotvisited}` : `${styles.mapdot}`
                } 
                         onClick={() => handleLinkClick(props.link)}
                         onMouseEnter={() => setShowTooltip(true)} 
                         onMouseLeave={() => setShowTooltip(false)}>
                 </NavLink> 
            </div>
        </>
    );
};

export default LocationItemDots;