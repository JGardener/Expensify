import moment from "moment";
import filtersReducer from "../../reducers/filters";

test("Should set up default filter values", () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test("Should set sortBy to amount", () => {
    const state = filtersReducer(undefined, {type: "SORT_BY_AMOUNT"});
    expect(state).toEqual({
        ...state, 
        sortBy: "amount"
    })
})

test("Should set sortBy to date", () => {
    const state = filtersReducer(undefined, {type: "SORT_BY_DATE"});
    expect(state).toEqual({
        ...state, 
        sortBy: "date"
    })
})

test("Should set up text filter", () => {
    const text = "this is my filter"
    const action = {type: "SET_TEXT_FILTER", text};
    const state = filtersReducer(undefined, action)
    expect(state).toEqual({
        ...state, 
        text
    })
})

test("Should set startDate filter", () => {
    const startDate = moment();
    const action = {
        type: "SET_START_DATE",
        startDate,
    }
    const state = filtersReducer(undefined, action);
    expect(state).toEqual({
        ...state,
        startDate
    })
})

test("Should set endDate filter", () => {
    const endDate = moment();
    const action = {
        type: "SET_END_DATE",
        endDate,
    }
    const state = filtersReducer(undefined, action);
    expect(state).toEqual({
        ...state,
        endDate
    })
})