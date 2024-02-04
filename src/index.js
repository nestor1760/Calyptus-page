import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

// const firebaseConfig = {
//     apiKey: "AIzaSyBRGMULXiV97IPAtfg6Rypn4OCfC3Gv1Qs",
//     authDomain: "calyptus-store-eb7ce.firebaseapp.com",
//     projectId: "calyptus-store-eb7ce",
//     storageBucket: "calyptus-store-eb7ce.appspot.com",
//     messagingSenderId: "767761814352",
//     appId: "1:767761814352:web:a33118912a9bacc3151255",
//     measurementId: "G-L2KQFSSH3Z"
//   };

 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

