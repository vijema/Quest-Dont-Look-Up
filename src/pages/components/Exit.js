import BackgroundImage from '../../images/Interface/Exit.jpg';

import { useNavigate } from "react-router-dom";

const Exit = (props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (props.link) {
            navigate(props.link);
        }
    };

    return (
        <div 
            className="bg-cover bg-center bg-gray-800 bg-no-repeat h-24 w-24 rounded-md border-white border-4 hover:scale-[105%] cursor-pointer
                       fixed bottom-5 left-5 mt-5 shadow-black shadow-[0_0_20px] transition-all ease-in-out duration-300
                       flex flex-col justify-center items-center leading-none gap-2"
            // style={{ backgroundImage: `url(${BackgroundImage})` }}
            onClick={handleClick}
        ><span className='text-[36px] top-1'>🐇</span>
        <span className='text-sky-400 font-semibold'>{props.text}</span>
        
        </div>
    );
};

export default Exit;
