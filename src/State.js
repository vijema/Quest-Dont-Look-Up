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
    state.attendedLocations[0].isMajorHouseAttended = true;    
    console.log(state.attendedLocations[0].isMajorHouseAttended)
    
};



export default state

