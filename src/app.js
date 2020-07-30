import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import { startSetExpense } from './actions/expenses';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import { Redirect } from 'react-router-dom';
import LoadingPage from './components/LoadingPage';

const store = configureStore();


const jsx = (
    <Provider store={store}><AppRouter /></Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById("root"));
        hasRendered = true;
    }
};

ReactDOM.render(<LoadingPage />, document.getElementById("root"));


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log("Log in");
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpense()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                // history.push('/dashboard');
                <Redirect to="/dashboard" />
            }
        });
    }
    else {
        console.log('Logout');
        store.dispatch(logout());
        renderApp();
        //history.push('/');
        <Redirect to="/" />
    }
});

