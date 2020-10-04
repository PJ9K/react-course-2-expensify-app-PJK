import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenselistItem'
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (   // export for the test cases
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
      {
        props.expenses.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No expenses</span>
          </div>
        ) : (
            props.expenses.map((expense) => {
              return <ExpenseListItem key={expense.id} {...expense} />     // spread operator to put everything from expense into expenselistItem
            })
          )
      }
    </div>
  </div>
)

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpenseList)
// eerste () provides information about what we want to connect 2e () the component that wants to access something from the store


