let state = {

    attendedLocations : [
        {isMajorHouseAttended: false},
        {isFarmerHouseAttended: false},
        {isSecretCaveAttended: false},
        {isBeaconInsideAttended: false},
      ],

    locData : [
        {   //loc : MajorHouse,
            title :"Major's House",
            //img : {MajorHouse},
            link: '/major-house',
            isAttended: false
        },
        {   //loc : FarmerHouse,
            title :"Farmer's House",
            //img : {FarmerHouse},
            link: '/',
            isAttended: false
        }],

    

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

