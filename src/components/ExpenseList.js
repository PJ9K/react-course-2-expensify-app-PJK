import React from 'react'
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenselistItem'
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (   // export for the test cases
  <div>
    {
      props.expenses.length === 0 ? (
        <p>No expenses to show</p>
      ) : (
        props.expenses.map((expense) => {
          return <ExpenseListItem key={expense.id} {...expense}/>     // spread operator to put everything from expense into expenselistItem
        })
      )
    }
  </div>
)

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpenseList)
// eerste () provides information about what we want to connect 2e () the component that wants to access something from the store


