import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// * toast
import 'react-toastify/dist/ReactToastify.css';
// * boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
// ** Redux Imports
import {Provider} from 'react-redux';
import {store} from './redux/storeConfig/store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


