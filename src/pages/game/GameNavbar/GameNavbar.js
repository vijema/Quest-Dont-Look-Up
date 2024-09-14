import { NavLink } from 'react-router-dom';
import styles from './GameNavbar.module.css'

const GameNavbar = () => {
    return (
        <main>
            <nav className={styles.nav}>
                <h2>Where to go</h2>
                <div className={styles.item}>
                    <NavLink ativeClassName={styles.active} to='/major-statue'>Major's Statue</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink ativeClassName={styles.active} to='/surfers-refuge'>Surfers refuge</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink ativeClassName={styles.active} to='/farmer-house'>Farmer's house</NavLink>
                </div>
                <div className={styles.item}> 
                    <NavLink ativeClassName={styles.active} to='/church-hall'>Church</NavLink>
                </div>
            </nav>
        </main>
    );
};

export default GameNavbar;