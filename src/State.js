let state = {

    attendedLocations : [
        {isMajorHouseAttended: false},
        {isFarmerHouseAttended: false},
        {isSecretCaveAttended: false},
        {isBeaconInsideAttended: false},
      ],

    collectedArtifacts : [
        {isMajorLettr: false},
        {isBeaconKey: false},
        {isLadder: false},        
      ]

}

export const isMajorHouseAttendedTrueFunc = () => {
  debugger; 
    state.attendedLocations[0].isMajorHouseAttended = true;    
    console.log(state.attendedLocations[0].isMajorHouseAttended)
    debugger; 
};



export default state

