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
  return (dispatch, getState) => {        // works only bcs we set up redux thunk, return function. Gets called with dispatch
    const uid = getState().auth.uid
    const {                     // setup defualts with destructuring
      description = '', 
      note = '', 
      amount = 0, 
      createdAt = 0
    } = expenseData
    const expense = { description, note, amount, createdAt }

    return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {     // return this for the testing file, for promise chaining
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }))
    })
  }
}

// REMOVE_EXPENSE
export const removeExpense = ({ id }) => ({    
  type: 'REMOVE_EXPENSE',
  id
})
// remove expense from firebase
export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {         // dispatch gets passed to this function by redux library
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({ id }))
    })            // communicate with firebase with asynchronous action and then return a synchronus action to change reduxstore
  }
}

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
      dispatch(editExpense(id, updates));
    });
  };
};

// SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
})

// Get expenses when site loads
export const startSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {  // return -> promise return so we have access to .then in app.js
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