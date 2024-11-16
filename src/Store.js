let store = {

    _state: {

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
    
    },

    getState () {return this._state},


    isMajorHouseAttendedTrueFunc () { 
        this._state.attendedLocations[0].isMajorHouseAttended = true;    
        console.log(this._state.attendedLocations[0].isMajorHouseAttended)        
    },

    isFarmerHouseAttendedTrueFunc () { 
        this._state.attendedLocations[0].isFarmerHouseAttended = true;    
        console.log(this._state.attendedLocations[0].isFarmerHouseAttended)        
    },

    clearKeys () { debugger
        this._state.attendedLocations[0].isMajorHouseAttended = false;    
        console.log(this._state.attendedLocations[0].isMajorHouseAttended)  
        localStorage.clear()         
    },

    dispatch(action) {},

    
}


export default store;
window.store = store

