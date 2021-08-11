import {addExpense, editExpense, removeExpense} from '../../actions/expenses'

test("Should setup removeExpense action object", () => {
    const action = removeExpense({id: "123abc"})
    expect(action).toEqual({
        type: "REMOVE_EXPENSE", 
        id: "123abc"
    })
}
);

test("Should setup editExpense action object", () => {
    const action = editExpense("id", {note: "New note"})
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "id",
        updates: {
            note: "New note"
        }}
)});


test('should setup addExpense action object with provided values', () => {
    const expenseData = {
        description: "Description",
        note: "Note",
        amount: 109500,
        createdAt: 1000 
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
        ...expenseData,
        id: expect.any(String)
        }
    })
})

test('should setup addExpense action object with default values', () => {
    const expenseData = addExpense();
    expect(expenseData).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    })
})
