import getVisibleExpenses from '../../selectors/expenses';
import moment from 'moment';
import { expect } from '@jest/globals';

// Test Data
const expenses = [
    {
    id: "1",
    description: "Gum",
    note: "",
    amount: 195,
    createdAt: 0
    },
    {
    id: "2",
    description: "Rent",
    note: "",
    amount: 109500,
    // This is 4 days in the past. 
    createdAt: moment(0).subtract(4, "days").valueOf()
    },
    {
    id: "3",
    description: "Credit Card",
    note: "",
    amount: 4500,
    // 4 days in the future.
    createdAt: moment(0).add(4, "days").valueOf()
    },
]

test('Should filter a text by value', () => {
    // Test filter for filtering the expenses array
    const filters = {
        // Credit Card and Rent should stay, Gum should get filtered out - no e in Gum
        text: 'e',
        sortBy: "date",
        startDate: undefined,
        endDate: undefined
    }
    /* 
    getVisibleExpenses is a filtering function. expenses is the array of expenses to be filtered,
    filters is the object used to filter the array. 
    */
    const result = getVisibleExpenses(expenses, filters)

    /* 
    As outlined on line 34, we expect "Gum" to be filtered out, and because we're sorting by date, 
    Credit Card will come first as its date has a positive value. Rent's negative date value means it's 
    in the past, so it gets placed after Credit Card 
    */
    expect(result).toEqual([expenses[2], expenses[1]])
})

test("Should filter by start date", () => {
    const filters = {
        text: '',
        sortBy: "date",
        startDate: moment(0),
        endDate: undefined
    }
    const result = getVisibleExpenses(expenses, filters)
    expect(result).toEqual([ expenses[2], expenses[0]])
})

test("Should filter by endDate", () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]])
})

test("Should sort by, not filter, date", () => {
    const filters = {
        text: '',
        sortBy: "date",
        startDate: 0,
        endDate: undefined
    }
    const result = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
})


test("Should sort by amount", () => {
    const filters = {
        text: '',
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined
    }
    const result  = getVisibleExpenses(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[2], expenses[0]])
})