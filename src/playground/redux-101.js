import { createStore } from "redux";

const Store = createStore((state = {count : 0 }) => {
    return state;
})

console.log(Store.getState());