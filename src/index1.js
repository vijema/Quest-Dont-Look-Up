import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import state, {isMajorHouseAttendedTrueFunc, subscribe} from "./State"





let rerenderTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
    <BrowserRouter>
        <App globalState={state} isMajorHouseAttendedProp={isMajorHouseAttendedTrueFunc}/>
    </BrowserRouter>
  
);
}



rerenderTree(state);

subscribe(rerenderTree)
