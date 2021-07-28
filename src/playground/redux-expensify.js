import { createStore, combineReducers } from "redux";

/* 

Predicted actions from looking at the state object down below. 

ADD_EXPENSE
REMOVE_EXPENSE
EDIT_EXPENSE
SET_TEXT_FILTER
SORT_BY_DATE
SORT_BY_AMOUNT
SET_START_DATE
SET_END_DATE

Expenses Reducer
*/

// Array of default state for expenses
const expensesReducerDefaultState = [];

// The reducer for expenses
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type){
        default: 
        return state;
    }
};

// Array of default state for filters 
const filtersReducerDefaultState = {
    endDate: undefined,
    sortBy: "date",
    startDate: undefined,
    text: ""
};

// The reducer for filters 
const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type){
        default: 
        return state;
    }
}

// The first argument of createStore is combineReducers, because we want a reducer for each root state object. const store = createStore(
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        })
    );

console.log(store.getState());

const demoState = {
    expenses: [{
        id: "randomlyGenerated",
        description: "January Rent",
        note: "This was the final payment for that address",
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: "rent",
        sortBy:'amount', // a date or amount
        startDate: undefined,
        endDate: undefined
    }
};