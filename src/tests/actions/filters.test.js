import expectExport from "expect";
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from "../../actions/filters";
import moment from 'moment'
import { expect } from "@jest/globals";

test("setTextFilter - should set up the default values", () => {
    const action = setTextFilter();
    expectExport(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ''
    })
})

test("setTextFilter - should return provided text value", () => {
    const action = setTextFilter("Maiia");
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: "Maiia"
    })
})

test("sortByDate - return the type", () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: "SORT_BY_DATE"
    })
})

test("sortByAmount - return the type", () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"
    })
})

test("setStartDate - should return a timestamp; an integer representing milliseconds from Jan 1st 1970", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0)
    })
})

test("setEndDate - should return a timestamp; an integer representing milliseconds from Jan 1st 1970", () => {
    const action = setEndDate(2000);
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: 2000
    })
})