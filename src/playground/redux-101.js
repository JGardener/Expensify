import { createStore } from "redux";

const Store = createStore((state = {count : 0 }, action) => {
    switch(action.type) {
        case "INCREMENT": 
        const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
        return {
            count: state.count + incrementBy
        }
        case "DECREMENT":
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
            return {
                count: state.count - decrementBy
            }
        case "RESET": 
        return {
            count: 0
        }
        case "SET": 
        return {
            count: action.count
        }
        default: 
        return state;
    }
})

console.log(Store.getState());

// I want to increment the count
// dispatch() sends off an action object. 

const unsubscribe = Store.subscribe(() => {
    console.log(Store.getState());
})

Store.dispatch({
    // It's a convention to use UPPERCASE here. Multi-words are separated by underscores
    type: 'INCREMENT',
    incrementBy: 5
});


Store.dispatch({
        type: "RESET"
})
    
Store.dispatch({
    type: "DECREMENT",
    decrementBy: 10
})

Store.dispatch({
    type: 'SET',
    count: 101
})
        
unsubscribe();
/*
A summary of what was learned here

Store.subscribe is used to do something when the state in the app changes.
unsubscribe is interesting! It is the return value of Store.subscribe
This means that unubscribe will STOP notifying us of changes to the state in React. 
It DOES NOT stop the changes from happening, it just stops you from seeing them
So, you "subscribe" to seeing state changes in React, then "unsubscribe" whenever you want to stop seeing changes.

Dynamic actions are up next, and they include data!
Redux will crash if you don't include a "type" key in your actions!

*/