
import styles from './GameNavbar.module.css'
import maincss from './../../../styles/main.css'
import LocationItem from './LocationItem'
import store from './../../../Store'

const GameNavbar = () => {

    const state = store.getState()
    const locKeys = Object.keys(state.locationsData);
    const attendedLocKeys = locKeys.filter(key => state.locationsData[key].isAttended);
    const locElements = attendedLocKeys.map(key => (
        <LocationItem key={state.locationsData[key].title} title={state.locationsData[key].title} link={state.locationsData[key].link} />
      ));
    return (
        <main>
            <h2 className={maincss.h2}>Where we go?</h2>
            <nav className={styles.nav}>
                
                {locElements}                
               
            </nav>
        </main>
    );
};

export default GameNavbar;