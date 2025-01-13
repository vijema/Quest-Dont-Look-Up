import { images } from "./ImageState";

let store = {
    _state: {
        locationsData: {
            Start: {
                title: "Welcome to Cape Rabbits!",
                cover: images.locationCovers.Start,
                link: "/start",
                isAvailable: true,
                isAttended: true,
                isHidden: false,
                coordinates: "top-[94%] left-[83%]",
            },
            MajorsHouse: {
                title: "Major's House",
                cover: images.locationCovers.MajorsHouse,
                link: "/majors-house",
                isAvailable: false,
                isAttended: localStorage.getItem("MajorsHouse has visited") === "false",
                isHidden: false,
                coordinates: "top-[79%] left-[83%]",
            },
            FarmersHouse: {
                title: "Farmer's House",
                cover: images.locationCovers.FarmersHouse,
                link: "/farmers-house",
                isAvailable: false,
                isAttended: localStorage.getItem("FarmersHouse has visited") === "false",
                isHidden: false,
                coordinates: "top-[67%] left-[14.5%]",
            },
            SurfersBase: {
                title: "Surfers Base",
                cover: images.locationCovers.SurfersBase,
                link: "/",
                isAvailable: false,
                isAttended: false,
                isHidden: false,
                coordinates: "top-[79%] left-[43%]",
            },
            SurfersYard: {
                title: "Surfers Yard",
                cover: images.locationCovers.SurfersYard,
                link: "/",
                isAvailable: false,
                isAttended: false,
                isHidden: false,
                coordinates: "top-[87.5%] left-[50%]",
            },
            ChurchYard: {
                title: "Church Courtyard",
                cover: images.locationCovers.ChurchYard,
                link: "/church-yard",
                isAvailable: false,
                isAttended: false,
                isHidden: false,
                coordinates: "top-[46.5%] left-[19.5%]",
            },
            Lighthouse: {
                title: "Point Bunnita Lighthouse",
                cover: images.locationCovers.Lighthouse,
                link: "/lighthouse",
                isAvailable: false,
                isAttended: false,
                isHidden: false,
                coordinates: "top-[91%] left-[61.1%]",

                LighthouseMainDoor: {
                    title: "Lighthouse Main Door",
                    link: "/",
                    isAvailable: false,
                    isAttended: true,
                    isHidden: false,
                },

                LighthouseBackDoor: {
                    title: "Lighthouse Back Door",
                    link: "/",
                    isAvailable: false,
                    isAttended: false,
                    isHidden: false,
                },
            },
            MajorsStatue: {
                title: "Major's Statue",
                link: "/majors-statue",
                isAvailable: false,
                isAttended: false,
                isHidden: false,
                coordinates: "top-[64%] left-[42.3%]",

                CaveMainHall: {
                    title: "Cave Main Hall",

                    link: "/cave/main-hall",
                    isAvailable: false,
                    isAttended: false,
                    isHidden: false,
                },
                CaveLighthouseBackDoor: {
                    title: "Lighthouse Back Door",
                    link: "/cave/Lighthouse-back-door",
                    isAvailable: false,
                    isAttended: false,
                    isHidden: false,
                },
            },
        },

        collectedArtifacts: {
            MajorsHouseKey: {
                title: "The key from the Major's house",
                image: images.itemImages.FarmerHouseKey,
                isCollected: false,
            },
            MajorLetter: {
                title: "Letter from Major",
                image: images.itemImages.FarmerHouseKey,
                isCollected: false,
            },
            Ladder: {
                title: "Ladder",
                image: images.itemImages.Ladder,
                isCollected: false,
            },
            LighthouseKey: {
                title: "The key with the Lighthouse image on the keychain",
                image: images.itemImages.LighthouseKey,
                isCollected: false,
            },
            StatueKey: {
                title: "The key with the man in a hood image on the keychain",
                image: images.itemImages.StatueKey,
                isCollected: false,
            },
            ChurchKey: {
                title: "The key with the orthodox cross image on the keychain",
                image: images.itemImages.ChurchKey,
                isCollected: false,
            },
        },
    },
    

    getState() {
        return this._state;
    },

    setLocationAttendedTrue(locationKey) {
        this._state.locationsData[locationKey].isAttended = true;
    },

    setLocationAvailableTrue(locationKeys) {
        if (!Array.isArray(locationKeys) || locationKeys.length === 0) {
            console.warn("locationKeys to set available is not an array or is empty:", locationKeys);
            return;
        }
        for (var i = 0; i < locationKeys.length; i++) this._state.locationsData[locationKeys[i]].isAvailable = true;
    },

    switchLocatonVisibility(locationKeys) {
        
        if (!Array.isArray(locationKeys) || locationKeys.length === 0) {
            console.warn("locationKeys to hide is not an array or is empty:", locationKeys);
            return;
        }
       
        locationKeys.forEach(key => {
            // Проверяем, существует ли ключ в состоянии
            if (this._state.locationsData[key]) {
                // Меняем значение isHidden на противоположное
                this._state.locationsData[key].isHidden = !this._state.locationsData[key].isHidden;
            } else {
                console.warn(`Key ${key} does not exist in locationsData.`);
            }
        });
    },

    destroyLocation(locationKeys) {
        for (var i = 0; i < locationKeys.length; i++) delete this._state.locationsData[locationKeys[i]];
    },

    setArtifactCollectedTrue(artifactKey) {
        this._state.locationsData[artifactKey].isCollected = true;
    },

    clearKeys() {
        localStorage.clear();
        // const clearStatus = (obj) => {
        //     if (typeof obj === "object" && obj !== null) {
        //         if (obj.isAttended !== undefined && obj.isAvailable !== undefined && obj.isCollected !== undefined) {
        //             obj.isAttended = false;
        //             obj.isAvailable = false;
        //             obj.isCollected = false;
        //         }
        //         for (const key in obj) {
        //             clearStatus(obj[key]);
        //         }
        //     }
        // };
        // clearStatus(this._state.locationsData, this._state.collectedArtifacts);
        window.location.href = "/?rabbit-#" + new Date().getTime() + "-was-just-born!";
    },

    dispatch(action) {},
};

export default store;
window.store = store;
