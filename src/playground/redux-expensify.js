import { createStore, combineReducers } from "redux";


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