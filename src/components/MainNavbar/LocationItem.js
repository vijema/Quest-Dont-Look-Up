import { NavLink } from 'react-router-dom';
import styles from './GameNavbar.module.css'


const LocationItem = (props) => {

    return (
        <>                          
                <div className={styles.item}>                    
                    <NavLink className={styles.active} to={props.link}>{props.title}</NavLink>
                </div>
           
        </>
    );
};

export default LocationItem;