import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import state, {isMajorHouseAttendedTrueFunc, subscribe} from "./State"

let root; // Объявляем переменную для корня

let rerenderTree = (state) => {
    debugger;

    
    if (!root) {
        // Если корень еще не создан, создаем его
        root = ReactDOM.createRoot(document.getElementById('root'));
    }
    
    root.render(
        
            <BrowserRouter>
                <App globalState={state} isMajorHouseAttendedProp={isMajorHouseAttendedTrueFunc} />
            </BrowserRouter>
        
    );
}




rerenderTree(state);

subscribe(rerenderTree)