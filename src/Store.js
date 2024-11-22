let store = {

    _state: {

        attendedLocations : [
            {isMajorsHouseAttended: false},
            {isFarmerHouseAttended: false},
            {isSerfersBaseAttended: false},
            {isBeaconAttended: [
                {BeaconMainDoor : false},
                {BeaconBackDoor : false},
            ]},
            {isSecretCaveAttended: [
                {TunnelToBeacon : false},
                {TunnelToChurch : false},
                {TunnelToPit : false},
            ]},
            {isChurchAttended: [
                {ChurchPublicEntrance : false},
                {ChurchSecretEntrance : false},
            ]},
            {isMarketStoreAttended: false},
            {isFlightFieldAttended: false},
            {isCarrotFieldAttended: false},
            
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
    
    },

    getState () {return this._state},


    isMajorsHouseAttendedTrueFunc () { 
        this._state.attendedLocations[0].isMajorsHouseAttended = true;   
        console.log('isMajorsHouseAttended =' + this._state.attendedLocations[0].isMajorsHouseAttended)         
    },

    isFarmerHouseAttendedTrueFunc () { 
        this._state.attendedLocations[0].isFarmerHouseAttended = true;    
        console.log('isFarmerHouseAttended =' + this._state.attendedLocations[0].isFarmerHouseAttended)          
    },

    clearKeys () { 
        this._state.attendedLocations[0].isMajorsHouseAttended = false;    
        this._state.attendedLocations[0].isFarmerHouseAttended = false;   
        localStorage.clear()         
    },

    dispatch(action) {},

    
}


export default store;
window.store = store

