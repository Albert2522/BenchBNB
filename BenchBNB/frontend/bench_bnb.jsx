import React from 'react';
import ReactDOM from 'react-dom';
import * as APIutil from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';

window.signUp = APIutil.signUp;
window.login = APIutil.login;
window.logout = APIutil.logout;
document.addEventListener('DOMContentLoaded', () => {
    let store1 = {session: { currentUser: null, errors: []}};

    if (window.currentUser) store1.session.currentUser = window.currentUser;

    // debugger;
    let store = configureStore();
    // debugger;
    window.store = store;
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store}/>, root);
});
