import React from 'react'
import { connect } from 'react-redux'    // to connect component to the store
import ExpenseForm from './ExpenseForm'
import { startAddExpense } from '../actions/expenses'

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    // props.dispatch(addExpense(expense))  versimpeld om te testen door middel van mapDispatchToProps
    this.props.startAddExpense(expense)
    this.props.history.push('/')   //swithc over to the dashboard, found via components addexpense history push
  }
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
          onSubmit={this.onSubmit}
        />
    </div>
    )
  }
}
// was geen class voor dat we begonnen testen in les 124,


const mapDispatchToProps = (dispatch) => {
  return {
    startAddExpense: (expense) => dispatch(startAddExpense(expense)) 
  }
}


export default connect(undefined, mapDispatchToProps)(AddExpensePage)