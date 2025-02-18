import { useState, useEffect } from 'react';
import LocationItemDots from '../components/GameMap/LocationItemDots';


const LocalNavigation = (props) => {    
    const [locElements, setLocElements] = useState([]);
    
        
    useEffect(() => {
        const state = props.state;
        const locKeys = Object.keys(state.locationsData);
        const attendedLocKeys = locKeys.filter((key) => state.locationsData[key][props.subLoc] && !state.locationsData[key].isHidden);
        const elements = attendedLocKeys.map((key) => (
            <LocationItemDots
                key={state.locationsData[key].title}
                title={state.locationsData[key].title}
                link={state.locationsData[key].link}
                coordinates={state.locationsData[key].coordinatesLocal}
                isVisited={state.locationsData[key].isAttended}
                upscale={props.upscale}
            />
        ));
        setLocElements(elements);
    }, [props]);

        
    return locElements;
};

export default LocalNavigation;
