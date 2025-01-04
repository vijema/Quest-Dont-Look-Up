import { NavLink } from 'react-router-dom';
import GameNavbar from '../GameNavbar/GameNavbar'
import BgPic from '../../../images/Start.png';



const Start = () => {  

    return (
        <>
        <GameNavbar />  
        <div className='flex flex-col mx-auto items-center md:flex-row md:justify-center  mb-5 w-full' >
            
             
                <img src={BgPic} className='m-2 w-96 md:w-[500px] md:h-[300px]' alt="logo" />         
                
                <div className=' w-96 md:w-[500px] md:h-[300px] md:self-start bg-stone-900/80 text-white text-sm p-6 m-2 flex flex-col items-center justify-between'>
                
                <p>Вы направляетесь в Cape Rabbits на лодке по приглашению своего старого боевого товарища и по совместительству основателя и мэра этого чудесного городка - отставного командира элитного отряда морских кроликов Майора Рэббитса, прозванного в городе Святой майор. В процессе плавания вы знакомитесь с капитаном и он рассказывает вам о том, что пару месяцев назад Майор бесследно исчез!
                </p>
                <NavLink className="btn" to='/majors-house'>
                    Visit Major's house
                </NavLink>                                
                </div>

        </div>
        </>
    );
};

export default Start;
