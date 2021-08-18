import { expect } from "@jest/globals";
import moment from "moment";
import expensesReducer from "../../reducers/expenses";
// Test Data
import expenses from '../fixtures/expenses';


test("Default should add an empty array", () => {
    const state = expensesReducer(undefined, {type: "@@INIT"});
    expect(state).toEqual([])
})

test("Should remove expense by the ID provided. The provided ID for this test is for the second item in the expenses array", () => {
    const action = {
        type: "REMOVE_EXPENSE", 
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test("Should not remove any expenses if the ID provided was not found", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: "-1"
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})

test("Should add an expense to the expenses array", () => {
    const expense = {
       id: "4",    
       description: "an expense",
       amount: 10,
       createdAt: 2
    }
    const action = {
        type: "ADD_EXPENSE",
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense])
})

test("Should edit an expense", () => {
    const amount = 12200;
    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[1].id,
       updates: {
           amount
       }
    }
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount)
})

test("Should not edit an expense if the ID was not found", () => {
    const amount = 12200;
    const action = {
        type: "EDIT_EXPENSE",
        id: -1,
       updates: {
           amount
       }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})