import { useState } from "react";

import { images } from "./ImageState";


let store = {
    _state: {
        locationsData: {
            Start: { 
                title: "Welcome to Cape Rabbits!", 
                titleAlt: "Eared pier",
                isAvailable: localStorage.getItem("Start is now available") === "true" ? true : false,
                isAttended: localStorage.getItem("Start has visited") === "true" ? true : false,
                isHidden: localStorage.getItem("Start visibility changed") === "true" ? true : false,
                coordinates: "top-[94%] left-[83%]",                
                cover: images.locationCovers.Start,
                coverVisited: images.locationCovers.Start2,
                link: "/start",
            },
            BayArea: {
                title: "Bay Area",                
                isAvailable: localStorage.getItem("BayArea is now available") === "true" ? true : false,
                isAttended: localStorage.getItem("BayArea has visited") === "true" ? true : false,
                isHidden: localStorage.getItem("BayArea visibility changed") === "true" ? true : false,
                coordinates: "top-[86%] left-[70%]",
                cover: images.locationCovers.BayArea,
                coverVisited: images.locationCovers.BayArea2,
                coverReVisited: images.locationCovers.BayArea3,
                link: "/bay-area",
            },

            MajorsHouse: {
                title: "Major's House",
                isAvailable: false,
                isAttended: localStorage.getItem("MajorsHouse has visited") === "true" ? true : false,
                isHidden: false,
                coordinates: "top-[79%] left-[83%]",
                cover: images.locationCovers.MajorsHouse,
                link: "/majors-house/living-room",                
            },
            MajorsHouseAttic: {
                title: "Attic",
                isAvailable: false,
                isAttended: localStorage.getItem("MajorsHouseAttic has visited") === "true" ? true : false,
                isHidden: false,
                //coordinates: "top-[79%] left-[83%]",
                cover: images.locationCovers.MajorsHouseAttic1,
                coverVisited: images.locationCovers.MajorsHouseAttic2,
                coverReVisited: images.locationCovers.MajorsHouseAttic,
                link: "/majors-house/attic",
                isSubloc: true
            },
            MajorsHouseBedroom: {
                title: "Bedroom",
                isAvailable: false,
                isAttended: localStorage.getItem("MajorsHouseAttic has visited") === "true" ? true : false,
                isHidden: false,
                //coordinates: "top-[79%] left-[83%]",
                cover: images.locationCovers.MajorsHouseBedroom,
                link: "/majors-house/bedroom",
                isSubloc: true
            },

            Lighthouse: {
                title: "Point Bunnita Lighthouse",                
                isAvailable: false,
                isAttended: localStorage.getItem("Lighthouse has visited") === "true" ? true : false,
                isHidden: false,
                coordinates: "top-[91%] left-[61.36%]",
                link: "/lighthouse",
                cover: images.locationCovers.Lighthouse,
            },
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

            // The City
            TheCity: {
                title: "The City",                
                isAvailable: localStorage.getItem("TheCity is now available") === "true" ? true : false,
                isAttended: localStorage.getItem("TheCity has visited") === "true" ? true : false,
                isHidden: localStorage.getItem("TheCity visibility changed") === "true" ? true : false,
                coordinates: "top-[68%] left-[78.4%]",
                coordinatesLocal: "!fixed top-[62%] left-[72%]",
                cover: images.locationCovers.City,
                coverVisited: images.locationCovers.City,
                coverReVisited: images.locationCovers.City,
                link: "/the-city/main-spot",
                isCitySubloc: true
            },
            MorpheusKiosk: {
                title: "Morpheus Kiock",
                isAvailable: false,
                isAttended: localStorage.getItem("MorpheusKiosk has visited") === "true" ? true : false,
                isHidden: false,                
                cover: images.locationCovers.City,
                coordinatesLocal: "!fixed top-[44%] left-[30%]",
                link: "/the-city/morpheus-kiosk",
                isSubloc: true,
                isCitySubloc: true
            },
            ThornyField: {
                title: "Thorny Field",
                isAvailable: false,
                isAttended: localStorage.getItem("ThornyField has visited") === "true" ? true : false,
                isHidden: false, //localStorage.getItem("ThornyField visibility changed") === "false" ? false : true,  //Hidden at start               
                cover: images.locationCovers.City,
                coordinatesLocal: "!fixed top-[73%] left-[18.5%]",
                link: "/the-city/thorny-field",
                isSubloc: true,
                isCitySubloc: true
            },
           

            FarmersHouse: {
                title: "Farmer's House",                
                isAvailable: false,
                isAttended: localStorage.getItem("FarmersHouse has visited") === "true" ? true : false,
                isHidden: false,
                coordinates: "top-[67%] left-[14.5%]",
                link: "/farmers-house",
                cover: images.locationCovers.FarmersHouse,                
            },
            SurfersBase: {
                title: "Surfers Base",                
                isAvailable: false,
                isAttended: false,
                isHidden: false,
                coordinates: "top-[79%] left-[43%]",
                link: "/",
                cover: images.locationCovers.SurfersBase,                
            },
            SurfersYard: {
                title: "Surfers Yard",                
                isAvailable: false,
                isAttended: false,
                isHidden: false,
                coordinates: "top-[87.5%] left-[50%]",
                link: "/",
                cover: images.locationCovers.SurfersYard,                
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
            
            MajorsStatue: {
                title: "Major's Statue",                
                isAvailable: false,
                isAttended: false,
                isHidden: false,
                coordinates: "top-[64%] left-[42.3%]",
                link: "/majors-statue",

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
                image: images.itemImages.MajorsHouseKey,
                isCollected: localStorage.getItem("MajorsHouseKey artifact collected") === "true" ? true : false,                
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

        serviceConditions: {
            isToldToGardener: localStorage.getItem("isToldToGardener condition trigged") === "true" ? true : false,
            isToldToFarmer: localStorage.getItem("isToldToFarmer condition trigged") === "true" ? true : false,
            isStorkBeenInside: localStorage.getItem("isStorkBeenInside condition trigged") === "true" ? true : false,
            
        }
    },   
   
    

    getState() {
        return this._state;
    },

    setLocationAttendedTrue(locationKey) {
        this._state.locationsData[locationKey].isAttended = true;
        localStorage.setItem(locationKey + ' has visited', 'true');
    },

    setLocationAvailableTrue(locationKeys) {
        if (!Array.isArray(locationKeys) || locationKeys.length === 0) {
            console.warn("locationKeys to set available is not an array or is empty:", locationKeys);
            return;
        }
        //for (var i = 0; i < locationKeys.length; i++) this._state.locationsData[locationKeys[i]].isAvailable = true;

        locationKeys.forEach(key => {            
            if (this._state.locationsData[key]) {                
                this._state.locationsData[key].isAvailable = true;
                localStorage.setItem(key + ' is now available', 'true');
            } else {
                console.warn(`Key ${key} does not exist in locationsData.`);
            }
        });
    },
    
    switchLocatonVisibility(locationKeys) {
        
        if (!Array.isArray(locationKeys) || locationKeys.length === 0) {
            console.warn("locationKeys to change visibility is not an array or is empty:", locationKeys);
            return;
        }
       
        locationKeys.forEach(key => {
            // Проверяем, существует ли ключ в состоянии
            if (this._state.locationsData[key]) {
                // Меняем значение isHidden на противоположное
                this._state.locationsData[key].isHidden = !this._state.locationsData[key].isHidden;
                localStorage.setItem(key + ' visibility changed', this._state.locationsData[key].isHidden);
            } else {
                console.warn(`Key ${key} does not exist in locationsData.`);
            }
        });
    },

    destroyLocation(locationKeys) {
        for (var i = 0; i < locationKeys.length; i++) delete this._state.locationsData[locationKeys[i]];
    },

    setArtifactCollectedTrue(artifactKeys) { 
        if (!Array.isArray(artifactKeys) || artifactKeys.length === 0) {
            console.warn("Artifacts to set true is not an array or is empty:", artifactKeys);
            return;
        }
        // for (var i = 0; i < artifactKeys.length; i++) this._state.collectedArtifacts[artifactKeys[i]].isCollected = true;  

        artifactKeys.forEach(key => {           
            if (this._state.collectedArtifacts[key]) {                
                this._state.collectedArtifacts[key].isCollected = true;
                localStorage.setItem(key + ' artifact collected', 'true');
            } else {
                console.warn(`Key ${key} does not exist in collectedArtifacts.`);                
            }
        });
    },

    setServiceConditions(conditionsKeys) {
        if (!Array.isArray(conditionsKeys) || conditionsKeys.length === 0) {
            console.warn("Conditions to set true is not an array or is empty:", conditionsKeys);
            return;
        }
        
        conditionsKeys.forEach(key => {  
                this._state.serviceConditions[key] = true;
                localStorage.setItem(key + ' condition trigged', 'true');            
        });
    },

    // clearKeys() {        
    //     localStorage.clear();
    //     const clearStatus = (obj) => {
    //         if (typeof obj === "object" && obj !== null) {
    //             if (obj.isAttended !== undefined && obj.isAvailable !== undefined && obj.isCollected !== undefined) {
    //                 obj.isAttended = false;
    //                 obj.isAvailable = false;
    //                 obj.isCollected = false;
    //             }
    //             for (const key in obj) {
    //                 clearStatus(obj[key]);
    //             }
    //         }
    //     };
    //     clearStatus(this._state.locationsData, this._state.collectedArtifacts);
    //     window.location.href = "/?rabbit-#" + new Date().getTime() + "-was-just-born!";        
    // },

           
    isGameResetting: false,
      
    clearKeys() {
        this.isGameResetting = true; // Флаг, чтобы блокировать эффекты
        localStorage.clear()
        //Object.keys(localStorage).forEach(key => localStorage.removeItem(key));      
        setTimeout(() => {
            window.location.href = "/?rabbit-#" + new Date().getTime() + "-was-just-born!";
        }, 0);        
    },
    clearResetFlag() {
        this._state.isGameResetting = false;
    },
   

    
    dispatch(action) {},
};

export default store;
window.store = store;
