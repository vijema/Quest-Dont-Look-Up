import { NavLink } from 'react-router-dom';
import styles from './GameNavbar.module.css'


const LocItem = (props) => {

    return (
        <>                          
                <div className={styles.item}>                    
                    <NavLink ativeClassName={styles.active} to={props.link}>{props.title}</NavLink>
                </div>
           
        </>
    );
};

export default LocItem;