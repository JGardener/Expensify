import { createStore } from "redux";

const Store = createStore((state = {count : 0 }, action) => {
    switch(action.type) {
        case "INCREMENT": 
        return {
            count: state.count + 1
        }
        case "DECREMENT":
            return {
                count: state.count - 1
            }
        case "RESET": 
        return {
            count: 0
        }
        default: 
        return state;
    }
})

console.log(Store.getState());

// I want to increment the count
// dispatch() sends off an action object. 
Store.dispatch({
    // It's a convention to use UPPERCASE here. Multi-words are separated by underscores
    type: 'INCREMENT'
});

Store.dispatch(
    {
        type: "RESET"
    }
)

Store.dispatch(
    {
        type: "DECREMENT"
    }
)



console.log(Store.getState());

/*
A summary of what was learned here

Actions are our way of communicating with the store
An action is an object. 
Currently, we have one key in our actions; type. 
Type has a string value, which is being checked by the switch case in the store. 
Dispatch is used to send the action to the store, to make it do something. 
createStore gets called initially on page load, then again on Store.dispatch
the switch checked by type, and performs the action associated with that action type. 
Profit!
*/