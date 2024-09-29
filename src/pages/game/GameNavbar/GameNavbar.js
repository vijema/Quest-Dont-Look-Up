import { NavLink } from 'react-router-dom';
import styles from './GameNavbar.module.css'
import maincss from './../../../styles/main.css'
import LocItem from './LocItem'
import state from './../../../State'

const GameNavbar = () => {

    let locElements = state.locData.map(loc => <LocItem key={loc.title} title={loc.title} link={loc.link}/>  )
    return (
        <main>
            <nav className={styles.nav}>
                <h2 className={maincss.h2}>Where we go?</h2>
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