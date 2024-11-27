let store = {
    _state: {        

        locationsData: {
            WelcomePage: {
                title: "Welcome Page",
                link: "/",
                isAttended: true,
            },
            MajorsHouse: {
                title: "Major's House",
                //img : {MajorHouse},
                link: "/majors-house",
                isAttended: localStorage.getItem("MajorsHouse has visited") === "true",
            },
            FarmersHouse: {
                //loc : FarmerHouse,
                title: "Farmer's House",
                //img : {FarmerHouse},
                link: "/farmers-house",
                isAttended: localStorage.getItem("FarmersHouse has visited") === "true",
            },
            SerfersBase: {
                title: "Serfers Base",
                link: "/",
                isAttended: true,
            },
            Beacon: {                
                title: "Beacon Main Door",
                link: "/",
                isAttended: false,
            
                BeaconMainDoor: {
                    title: "Beacon Main Door",
                    link: "/",
                    isAttended: true,
                },

                BeaconBackDoor: {
                    title: "Beacon Back Door",
                    link: "/",
                    isAttended: false,
                }, 
            
            },
            SecretCave: {
                CaveMainHall: {
                    title: "Cave Main Hall",
                    link: "/",
                    isAttended: false,
                },
                BeaconBackDoor: {
                    title: "Beacon Back Door",
                    link: "/",
                    isAttended: false,
                },
            },
        },

        collectedArtifacts: [
            { isMajorLettr: false },
            { isBeaconKey: false },
            { isLadder: false },
        ],
    },

    getState() {
        return this._state;
    },    
    
    isLocationAttendedTrueFunc(locationKey) {        
        if (this._state.locationsData[locationKey]) {
          this._state.locationsData[locationKey].isAttended = true;
        }
      },

    clearKeys() {
      const clearAttendedStatus = (obj) => {
        if (typeof obj === 'object' && obj !== null) {
          if (obj.isAttended !== undefined) {
            obj.isAttended = false;
          }
          for (const key in obj) {
            clearAttendedStatus(obj[key]);
          }
        }
      };
    
      clearAttendedStatus(this._state.locationsData);
      localStorage.clear();
    },

    dispatch(action) {},
};

export default store;
window.store = store;
