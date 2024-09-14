import { NavLink } from 'react-router-dom';


const Start = () => {
    

   

    return (
        <div className="locationStart">
            <div className="CommonBg">
                <p>
                    Вы направляетесь в Cape Rabbits !
                </p>
                <NavLink className="btn" to='/major-house'>
                    Check Major's house
                </NavLink>
            </div>
        </div>
    );
};

export default Start;
