let store = {

    _state: {

        attendedLocations: {
            isMajorsHouseAttended: (localStorage.getItem('Major House Has Visited') === 'true'),
            isFarmerHouseAttended: false,
            isSerfersBaseAttended: false,
            isBeaconAttended: {
                BeaconMainDoor : false,
                BeaconBackDoor : false,
            },
            isSecretCaveAttended: {
                TunnelToBeacon : false,
                TunnelToChurch : false,
                TunnelToPit : false,
            },
           isChurchAttended: {
                ChurchPublicEntrance : false,
                ChurchSecretEntrance : false
            },
            isMarketStoreAttended: false,
            isFlightFieldAttended: false,
            isCarrotFieldAttended: false,
            
        },
    
        locationsData : [
            {   
                title :"Welcome",                
                link: '/',
                isAttended: true,
            },
            {   //loc : MajorHouse,
                title :"Major's House",
                //img : {MajorHouse},
                link: '/major-house',
                //isAttended: localStorage.getItem('Major House Has Visited'),
                isAttended: (localStorage.getItem('Major House Has Visited') === 'true'),

             
                //isAttended: getState.state.attendedLocations.isMajorsHouseAttended, 
            },
            {   //loc : FarmerHouse,
                title :"Farmer's House",
                //img : {FarmerHouse},
                link: '/',
                isAttended: true 
                //isAttended: this._state.attendedLocations.isFarmerHouseAttended,               
            },
            {   
                title :"Serfers Base",                
                link: '/',
                isAttended: true 
                //isAttended: this._state.attendedLocations.isSerfersBaseAttended,  
                              
            },
            {   
                title :"Beacon",
                link: '/',
                isAttended: false   
                //isAttended: this._state.attendedLocations.isFarmerHouseAttended.BeaconMainDoor,   
                                         
            },
            {   
                title :"Beacon Back Door", 
                link: '/',
                isAttended: false 
                //isAttended: this._state.attendedLocations.isFarmerHouseAttended.BeaconBackDoor,                
            },
            
       
        ],
    
        
    
        collectedArtifacts : [
            {isMajorLettr: false},
            {isBeaconKey: false},
            {isLadder: false},        
          ]
    
    },

    getState () {return this._state},


    isMajorsHouseAttendedTrueFunc () { 
        this._state.attendedLocations.isMajorsHouseAttended = true;  
        this._state.locationsData[1].isAttended = true;  
        console.log('isMajorsHouseAttended = ' + this._state.attendedLocations.isMajorsHouseAttended)         
    },

    isFarmerHouseAttendedTrueFunc () { 
        this._state.attendedLocations.isFarmerHouseAttended = true;    
        console.log('isFarmerHouseAttended = ' + this._state.attendedLocations.isFarmerHouseAttended)          
    },

    clearKeys () { 
        this._state.attendedLocations.isMajorsHouseAttended = false; 
        this._state.locationsData[1].isAttended = false;     
        this._state.attendedLocations.isFarmerHouseAttended = false;   
        localStorage.clear() 
        console.log('isMajorsHouseAttended = ' + this._state.attendedLocations.isMajorsHouseAttended)  
        console.log('isFarmerHouseAttended = ' + this._state.attendedLocations.isFarmerHouseAttended)         
    },

    dispatch(action) {},

    
}


export default store;
window.store = store

