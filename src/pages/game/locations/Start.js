import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Start = () => {
    const [isMajorHouseAttended, setIsMajorHouseAttended] = useState(true);

    useEffect(() => {
        console.log(isMajorHouseAttended);
    }, [isMajorHouseAttended]);

    const handleButtonClick = () => {
        setIsMajorHouseAttended(false);
    };

    useEffect(() => {
        document.cookie = `isMajorHouseAttended=${isMajorHouseAttended}`;
        console.log(isMajorHouseAttended);
    }, [isMajorHouseAttended]);

    return (
        <div className="locationStart">
            <div className="CommonBg">
                <p>
                    Вы направляетесь в Cape Rabbits !
                </p>
                <NavLink className="btn" onClick={handleButtonClick} to='/major-house'>
                    Check Major's house
                </NavLink>
            </div>
        </div>
    );
};

export default Start;
