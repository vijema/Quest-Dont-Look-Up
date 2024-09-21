import { NavLink } from 'react-router-dom';
import "../styles/main.css"
import PicWelcome from '../img/Ticket.jpg';


const Welcome = () => {

  const clearKeys = () => {localStorage.clear()}
  return (

    <div className="container">
      
        <img src={PicWelcome} className="App-logo" alt="logo" />
        <p>
          Find the Major and safe Cape Rabbits!
        </p>

        <NavLink to='/start' className="btn">Let's start!</NavLink>
        <NavLink className="btn" onClick={clearKeys}>Clear Keys</NavLink>
      
    </div>

    );
}
 


export default Welcome;
