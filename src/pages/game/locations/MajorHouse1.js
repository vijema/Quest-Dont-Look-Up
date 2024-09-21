import GameNavbar from "./../GameNavbar/GameNavbar"

const MajorHouse = (props) => {
  debugger;
  console.log(props.userState)
 
  return (
    <main>

      {props.userState ? <GameNavbar /> : <></>}

      <div className="locationMajorHouse">
        <div className="CommonBg">
             
          {props.userState ? (
            <p>Вы ранее уже посещали дом мэра.</p>
          ) : (
            <p >
              
              Вы посетили дом мэра впервые.</p>
              
          )}
          
          {props.isMajorHouseAttended()}
          {console.log(props.userState)}
         
          
        </div>
      </div>     

    </main>
    
  );

 
};



export default MajorHouse;
