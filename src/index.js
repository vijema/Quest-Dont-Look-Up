import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from "./Store"

// Location first visit check incapsulated in a separate reusable component
// Only single one universal isLocationAttendedTrueFunc(locationKey) is now being used to update all the locations statuses
// The universal component is now being used for all locations

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <BrowserRouter>
        <App
            state={store.getState()}
            isLocationAttendedTrue={store.isLocationAttendedTrueFunc.bind(store)}
            additionalLocationsAttended={store.additionalLocationsAttended.bind(store)}
            gameNavbarNotify={store.gameNavbarNotify.bind(store)}
            clearKeys={store.clearKeys.bind(store)}
        />
    </BrowserRouter>

);


