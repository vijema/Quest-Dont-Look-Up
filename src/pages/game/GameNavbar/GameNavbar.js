import { NavLink } from 'react-router-dom';
import styles from './GameNavbar.module.css'
import maincss from './../../../styles/main.css'
import LocationItem from './LocationItem'
import store from './../../../Store'

const GameNavbar = () => {

    const state = store.getState()
    const locElements = state.locationsData.filter(loc => loc.isAttended).map(loc => <LocationItem key={loc.title} title={loc.title} link={loc.link}/>  )
    return (
        <main>
            <h2 className={maincss.h2}>Where we go?</h2>
            <nav className={styles.nav}>
                
                {locElements}
                
                {//<div className={styles.item}>
                //    <NavLink ativeClassName={styles.active} to='/major-statue'>Major's Statue</NavLink>
                //</div>
                //<div className={styles.item}>
                //    <NavLink ativeClassName={styles.active} to='/surfers-refuge'>Surfers refuge</NavLink>
                //</div>
                //<div className={styles.item}>
                //    <NavLink ativeClassName={styles.active} to='/farmer-house'>Farmer's house</NavLink>
                //</div>
                //<div className={styles.item}> 
                //    <NavLink ativeClassName={styles.active} to='/church-hall'>Church</NavLink>
                //</div>
                }
            </nav>
        </main>
    );
};

export default GameNavbar;