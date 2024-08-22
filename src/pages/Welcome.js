import { NavLink } from 'react-router-dom';
import "../styles/main.css"
import PicWelcome from '../img/Ticket.jpg';


const Welcome = () => {
  return (

    <div className="container">
      
        <img src={PicWelcome} className="App-logo" alt="logo" />
        <p>
          Find the Major and safe Cape Rabbits!
        </p>

        <NavLink to='/start' className="btn">Let's start!</NavLink>
      
    </div>

    );
}
 
export default Welcome;
