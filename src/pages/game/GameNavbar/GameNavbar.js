import React, { useEffect, useState } from 'react';
import styles from './GameNavbar.module.css'
import maincss from './../../../styles/main.css'
import LocationItem from './LocationItem'
import store from './../../../Store'



const GameNavbar = () => {
    const [locationsData, setLocationsData] = useState(store.getState().locationsData);
    const state = store.getState()

    useEffect(() => {
        const updateLocations = () => {
            setLocationsData(store.getState().locationsData);
        };

        // Подписываемся на изменения в store
        const unsubscribe = store.subscribe(updateLocations);

        // Очистка подписки при размонтировании компонента
        return () => {
            unsubscribe(); // Вызываем функцию отписки
        };
    }, [state]);

    // Используем состояние locationsData, которое обновляется
    const locKeys = Object.keys(locationsData);
    const attendedLocKeys = locKeys.filter(key => locationsData[key].isAttended);
    const locElements = attendedLocKeys.map(key => (
        <LocationItem key={locationsData[key].title} title={locationsData[key].title} link={locationsData[key].link} />
    ));

    return (
        <main className=' w-full  bg-stone-900/80 text-white text-sm pt-5 mb-5 flex flex-col items-center' >
            <h2 className={maincss.h2}>Where we go?</h2>
            <nav className={styles.nav}>
                {locElements}                
            </nav>
        </main>
    );
};

export default GameNavbar;