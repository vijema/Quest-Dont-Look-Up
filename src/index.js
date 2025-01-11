import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./Store";


// Logo added, Main sidebar crated, Welcome page cleaned
// Game map and navbar connected via props
// Visited locations option added
// Additional available locations and destroy location logic added
// Location first visit check incapsulated in a separate reusable component
// Only single one universal isLocationAttendedTrueFunc(locationKey) is now being used to update all the locations statuses
// The universal component is now being used for all locations

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <App
        state={store.getState()}
        setLocationAttendedTrue={store.setLocationAttendedTrue.bind(store)}
        setLocationAvailableTrue={store.setLocationAvailableTrue.bind(store)}
        destroyLocation={store.destroyLocation.bind(store)}
        clearKeys={store.clearKeys.bind(store)}
    />
);
