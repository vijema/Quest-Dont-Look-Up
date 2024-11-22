import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from "./Store"


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <BrowserRouter>
        <App
            state={store.getState()}
            isMajorsHouseAttended={store.isMajorsHouseAttendedTrueFunc.bind(store)}
            clearKeys={store.clearKeys.bind(store)}
        />
    </BrowserRouter>

);


