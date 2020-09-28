import uuid from 'uuid'
import database from '../firebase/firebase'


//// Action Generators
// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
})

// save things to firebase
export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {        // works only bcs we set up redux thunk, return function. Gets called with dispatch
    const {                     // setup defualts with destructuring
      description = '', 
      notes = '', 
      amount = 0, 
      createdAt = 0
    } = expenseData
    const expense = { description, notes, amount, createdAt }

    return database.ref('expenses').push(expense).then((ref) => {     // return this for the testing file, for promise chaining
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }))
    })
  }
}

// REMOVE_EXPENSE
export const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})
// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
})

// Get expenses when site loads
export const startSetExpenses = () => {
  return (dispatch) => {
    return database.ref('expenses').once('value').then((snapshot) => {  // return -> promise return so we have access to .then in app.js
      const expenses = []

      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      })

      dispatch(setExpenses(expenses))
    })
  }
}