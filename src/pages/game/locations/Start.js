import { NavLink } from 'react-router-dom';
import GameNavbar from '../GameNavbar/GameNavbar'



const Start = () => {  

    return (
        <div className="locationStart">
            <div className="CommonBg">
            <GameNavbar />
                <div className='content'>
                <p>Вы направляетесь в Cape Rabbits на лодке по приглашению своего старого боевого товарища и по совместительству основателя и мэра этого чудесного городка - отставного командира элитного отряда морских кроликов Майора Рэббитса, прозванного в городе Святой майор. В процессе плавания вы знакомитесь с капитаном и он рассказывает вам о том, что пару месяцев назад Майор бесследно исчез!
                </p>
                <NavLink className="btn" to='/majors-house'>
                    Visit Farmer's house
                </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Start;
