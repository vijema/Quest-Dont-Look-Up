let store = {
    _state: {
        locationsData: {
            WelcomePage: {
                title: "Welcome Page",
                link: "/",
                isAttended: true,
                coordinates: "top-[94%] left-[83%]"
            },
            MajorsHouse: {
                title: "Major's House",
                //img : {MajorHouse},
                link: "/majors-house",
                isAttended:
                    localStorage.getItem("MajorsHouse has visited") === "true",
                coordinates: "top-[79%] left-[83%]"
            },
            FarmersHouse: {
                //loc : FarmerHouse,
                title: "Farmer's House",
                //img : {FarmerHouse},
                link: "/farmers-house",
                isAttended:
                    localStorage.getItem("FarmersHouse has visited") === "true",
                coordinates: "top-[67%] left-[14.5%]"
            },
            SerfersBase: {
                title: "Serfers Base",
                link: "/",
                isAttended: false,
                coordinates: "top-[79%] left-[43%]"
            },
            Beacon: {
                title: "Beacon Main Door",
                link: "/",
                isAttended: false,
                coordinates: "top-[91%] left-[61.1%]",

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
                title: "Magor's Statue",
                link: "/",
                isAttended: false,
                coordinates: "top-[30%] left-[30%]",

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
            { isMajorLetter: false },
            { isBeaconKey: false },
            { isLadder: false },
        ],
    },

    _listeners: [], // Массив для хранения подписчиков


    getState() {
        return this._state;
    },
    

    isLocationAttendedTrueFunc(locationKey) {       
            this._state.locationsData[locationKey].isAttended = true;
            this.gameNavbarNotify(); // Уведомляем подписчиков об изменении
        
    },

    additionalLocationsAttended(locationKeys) {        
        for (var i = 0; i < locationKeys.locationKeys.length ; i++ ) this._state.locationsData[i].isAttended = true;        
    },

    clearKeys() {
        localStorage.clear();

        const clearAttendedStatus = (obj) => {
            if (typeof obj === "object" && obj !== null) {
                if (obj.isAttended !== undefined) {
                    obj.isAttended = false;
                }
                for (const key in obj) {
                    clearAttendedStatus(obj[key]);
                }
            }
        };

        clearAttendedStatus(this._state.locationsData);   
        this.gameNavbarNotify(); // Уведомляем подписчиков об изменении     
    },

    subscribe(listener) {
        this._listeners.push(listener);
        // Возвращаем функцию для отписки
        return () => {
            this._listeners = this._listeners.filter(l => l !== listener);
        };
    },

    gameNavbarNotify() {
        this._listeners.forEach(listener => listener());
    },

    dispatch(action) {},
};

export default store;
window.store = store;
