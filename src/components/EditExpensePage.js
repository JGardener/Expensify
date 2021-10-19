import React from 'react'
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

// Refactor this to be class-based component. 
// Map dispatch to props - we have editExpense and removeExpense

// Three test cases

// should render EditExpensePage
// snapshot that. 

// Should handle editExpense
// spies

// should handle removeExpense
// spies

// can use beforeEach to create the spies and then reuse them in each test
export class EditExpensePage extends React.Component { 
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }
  onRemove = () => {
    this.props.removeExpense({id: this.props.expense.id});
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <ExpenseForm 
        expense={this.props.expense}
        onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    )
  }
}

// const EditExpensePage = (props) => {
//   return (
//     <div>
//       <ExpenseForm 
//       expense={props.expense}
//       onSubmit={(expense) => {
//         props.dispatch(editExpense(props.match.params.id, expense));
//         props.history.push('/');
//       }}
//       /> 
//       <button onClick={() => {props.dispatch(removeExpense({id: props.expense.id}));
//       props.history.push('/')}}>Remove</button>       
//     </div>
//   )
// }

const mapStateToProps = (state, props) => {
  return {
      expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (data) => dispatch(removeExpense(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);