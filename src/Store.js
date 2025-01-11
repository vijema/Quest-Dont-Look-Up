let store = {
    _state: {
        locationsData: {
            StartPage: {
                title: "Welcome to Cape Rabbits",
                link: "/start",
                isAttended: true,
                coordinates: "top-[94%] left-[83%]"
            },
            MajorsHouse: {
                title: "Major's House",
                //img : {MajorHouse},
                link: "/majors-house",
                isAvailable: false,
                isAttended:
                    localStorage.getItem("MajorsHouse has visited") === "true",
                coordinates: "top-[79%] left-[83%]"
            },
            FarmersHouse: {
                //loc : FarmerHouse,
                title: "Farmer's House",
                //img : {FarmerHouse},
                link: "/farmers-house",
                isAvailable: false,
                isAttended:
                    localStorage.getItem("FarmersHouse has visited") === "true",
                coordinates: "top-[67%] left-[14.5%]"
            },
            SerfersBase: {
                title: "Serfers Base",
                link: "/",
                isAvailable: false,
                isAttended: false,
                coordinates: "top-[79%] left-[43%]"
            },
            Beacon: {
                title: "Beacon Main Door",
                link: "/",
                isAvailable: false,
                isAttended: false,
                coordinates: "top-[91%] left-[61.1%]",

                BeaconMainDoor: {
                    title: "Beacon Main Door",
                    link: "/",
                    isAvailable: false,
                    isAttended: true,
                },

                BeaconBackDoor: {
                    title: "Beacon Back Door",
                    link: "/",
                    isAvailable: false,
                    isAttended: false,
                },
            },
            MajorsStatue: {
                title: "Major's Statue",
                link: "/majors-statue",
                isAvailable: false,
                isAttended: false,
                coordinates: "top-[64%] left-[42.3%]",

                CaveMainHall: {
                    title: "Cave Main Hall",
                    link: "/cave/main-hall",
                    isAvailable: false,
                    isAttended: false,
                },
                CaveBeaconBackDoor: {
                    title: "Beacon Back Door",
                    link: "/cave/beacon-back-door",
                    isAvailable: false,
                    isAttended: false,
                },
            },
        },

        collectedArtifacts: [
            { isMajorLetter: false },
            { isBeaconKey: false },
            { isLadder: false },
        ],
    },

    
    getState() {
        return this._state;
    },
    
    setLocationAttendedTrue(locationKey) {       
            this._state.locationsData[locationKey].isAttended = true;        
    },

    // isLocationAvailable(locationKeys) {      debugger  
    //      // Проверяем, является ли locationKeys массивом и не пустой ли он
    // if (!Array.isArray(locationKeys) || locationKeys.length === 0) {
    //     console.warn('locationKeys is not an array or is empty:', locationKeys);
    //     return;
    // }

    // for (var i = 0; i < locationKeys.length; i++) {
    //     const locationKey = locationKeys[i];
    //     const locationData = this._state.locationsData[locationKey];

    //     if (locationData) {
    //         locationData.isAvailable = true;
    //     } else {
    //         console.warn(`Location with key ${locationKey} not found.`);
    //     }
    // }      
    // },

    setLocationAvailableTrue(locationKeys) {  
        if (!Array.isArray(locationKeys) || locationKeys.length === 0) {
            console.warn('locationKeys is not an array or is empty:', locationKeys);
            return;
        }
        for (var i = 0; i < locationKeys.length ; i++ ) this._state.locationsData[locationKeys[i]].isAvailable = true;  
    },   

    destroyLocation(locationKeys) {
        for (var i = 0; i < locationKeys.length ; i++ ) delete this._state.locationsData[locationKeys[i]]
    },

    clearKeys() {
        localStorage.clear();
        const clearStatus = (obj) => {
            if (typeof obj === "object" && obj !== null) {
                if (obj.isAttended !== undefined) {
                    obj.isAttended = false;
                    obj.isAvailable = false;
                }
                for (const key in obj) {
                    clearStatus(obj[key]);
                }
            }
        };
        clearStatus(this._state.locationsData);   
        window.location.href = '/?rabbit-#' + new Date().getTime() + '-was-just-born!'        
    },

   

    dispatch(action) {},
};

export default store;
window.store = store;
