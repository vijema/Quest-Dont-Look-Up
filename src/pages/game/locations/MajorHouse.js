// import state from "./State"
import GameNavbar from "./../GameNavbar/GameNavbar"

const MajorHouse = (props) => {



  return (
    <main>
    <GameNavbar />
    <div className="locationMajorHouse">
      <div className="CommonBg">
        {props.userState ? (
        <p>Вы посещали дом мэра.</p>
        ) : (
        <p>Вы не посещали дом мэра.</p>
        )}
      </div>
    </div>
    </main>
  );
};

export default MajorHouse;
