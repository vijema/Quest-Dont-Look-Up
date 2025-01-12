import FarmerHouseKey from './images/artifacts/Key-01.jpg'
import Ladder from './images/artifacts/Ladder11.jpg'
import LighthouseKey from './images/artifacts/KeyLighthouse.jpg'
import StatueKey from './images/artifacts/KeyStatue.jpg'
import ChurchKey from './images/artifacts/KeyChurch.jpg'

import { images } from "./ImageState";





let store = {
    _state: {
        locationsData: {
            Start: {                
                title: "Welcome to Cape Rabbits!",
                cover: images.Start,
                link: "/start",
                isAttended: true,
                coordinates: "top-[94%] left-[83%]"
            },
            MajorsHouse: {
                title: "Major's House",
                cover: images.MajorsHouse,
                link: "/majors-house",
                isAvailable: false,
                isAttended:
                    localStorage.getItem("MajorsHouse has visited") === "true",
                coordinates: "top-[79%] left-[83%]"
            },
            FarmersHouse: {                
                title: "Farmer's House",
                cover: images.FarmersHouse,
                link: "/farmers-house",
                isAvailable: false,
                isAttended:
                    localStorage.getItem("FarmersHouse has visited") === "true",
                coordinates: "top-[67%] left-[14.5%]"
            },
            SurfersBase: {
                title: "Surfers Base",
                cover: images.SurfersBase,
                link: "/",
                isAvailable: false,
                isAttended: false,
                coordinates: "top-[79%] left-[43%]"
            },
            SurfersYard: {
                title: "Surfers Yard",
                cover: images.SurfersYard,
                link: "/",
                isAvailable: true,
                isAttended: false,
                coordinates: "top-[87.5%] left-[50%]"
            },
            ChurchYard: {
                title: "Church Courtyard",
                cover: images.ChurchYard,
                link: "/church-yard",
                isAvailable: true,
                isAttended: false,
                coordinates: "top-[46.5%] left-[19.5%]"
            },
            Lighthouse: {
                title: "Point Bunnita Lighthouse",
                cover: images.Lighthouse,
                link: "/lighthouse",
                isAvailable: false,
                isAttended: false,
                coordinates: "top-[91%] left-[61.1%]",

                LighthouseMainDoor: {
                    title: "Lighthouse Main Door",                    
                    link: "/",
                    isAvailable: false,
                    isAttended: true,
                },

                LighthouseBackDoor: {
                    title: "Lighthouse Back Door",
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
                CaveLighthouseBackDoor: {
                    title: "Lighthouse Back Door",
                    link: "/cave/Lighthouse-back-door",
                    isAvailable: false,
                    isAttended: false,
                },
            },
        },

        collectedArtifacts: {
            isMajorsHouseKey: {
                title: "The key from the Major's house",
                image: {FarmerHouseKey},
                isCollected: false,
            },
            isMajorLetter: {
                title: "Letter from Major",
                image: {FarmerHouseKey},
                isCollected: false,
            },
            isLadder: {
                title: "Ladder",
                image: {Ladder},
                isCollected: false,
            },
            isLighthouseKey: {
                title: "The key with the Lighthouse image on the keychain",
                image: {LighthouseKey},
                isCollected: false,
            },
            isStatueKey: {
                title: "The key with the man in a hood image on the keychain",
                image: {StatueKey},
                isCollected: false,
            },  
            isChurchKey: {
                title: "The key with the orthodox cross image on the keychain",
                image: {ChurchKey},
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

    setArtifactCollectedTrue(artifactKeys) {  
        if (!Array.isArray(artifactKeys) || artifactKeys.length === 0) {
            console.warn('artifactKeys is not an array or is empty:', artifactKeys);
            return;
        }
        for (var i = 0; i < artifactKeys.length ; i++ ) this._state.collectedArtifacts[artifactKeys[i]].isCollected = true;  
    }, 

    clearKeys() {
        localStorage.clear();
        const clearStatus = (obj) => {
            if (typeof obj === "object" && obj !== null) {
                if (obj.isAttended !== undefined && obj.isAvailable !== undefined && obj.isCollected !== undefined) {
                    obj.isAttended = false;
                    obj.isAvailable = false;
                    obj.isCollected = false;
                }
                for (const key in obj) {
                    clearStatus(obj[key]);
                }
            }
        };
        clearStatus(this._state.locationsData, this._state.collectedArtifacts);   
        window.location.href = '/?rabbit-#' + new Date().getTime() + '-was-just-born!'        
    },

   

    dispatch(action) {},
};

export default store;
window.store = store;

