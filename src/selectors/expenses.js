import moment from "moment";

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        // startDate match will always return true
        // We gave the user an option to clear the dates, so we check that startDate exists. 
        // If there is no startDate we return true.
        // Otherwise, using isSameOrBefore, we can check to see if startDate is the same or before the createdAt time for the expense
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true ;
        // The same applied to endDateMatch
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy === "date"){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if(sortBy === "amount"){
            return a.amount < b.amount ? 1 : -1;
        };
    })
}

export default getVisibleExpenses;