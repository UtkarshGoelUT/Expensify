import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({ description: "Water bill", amount: 200 }));
store.dispatch(addExpense({ description: "Rent", amount: 1000, createdAt: 400 }));
store.dispatch(addExpense({ description: "Gas bill" }));
store.dispatch(setTextFilter('water'));
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
setTimeout(() => { store.dispatch(setTextFilter('bill')) }, 3000);
console.log(visibleExpenses);
console.log(store.getState());

const jsx = (
    <Provider store={store}><AppRouter /></Provider>
)

ReactDOM.render(jsx, document.getElementById("root"));
