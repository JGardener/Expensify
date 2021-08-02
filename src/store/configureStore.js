import {createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

// The first argument of createStore is combineReducers, because we want a reducer for each root state object. const store = createStore(
export default () => {
    const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
        })
    );
    return store;
};