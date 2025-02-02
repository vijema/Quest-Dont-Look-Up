import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./Store";




// Move back to boat prevented
// Map button in bubbles customized

// Switch case with location dot and button added to the end of the dialogs
// Dilog system incapsulated and adapted for different dialogs

// Dilog system with memory via local storage 

// Content box and dialog box added
// Modal topbar
// Full screen pictures concept returned, bg images added



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <App
        state={store.getState()}
        setLocationAttendedTrue={store.setLocationAttendedTrue.bind(store)}
        setLocationAvailableTrue={store.setLocationAvailableTrue.bind(store)}
        switchLocatonVisibility={store.switchLocatonVisibility.bind(store)}
        destroyLocation={store.destroyLocation.bind(store)}
        setArtifactCollectedTrue={store.setArtifactCollectedTrue.bind(store)}        
        clearKeys={store.clearKeys.bind(store)}        
    />
);
