import {createStore, combineReducers} from 'redux'
import uuid from 'uuid'

//// Action Generators
// ADD_EXPENSE
const addExpense = (
  {
    description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})
// REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})
// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})
// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})
//SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
})
//SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})
//SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
})
//SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
})


//// REDUCERS
// expense reducer
const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,        // spread syntax, use what is in state and add action.expense (doesn't change state object)
        action.expense    // like concat()
      ]
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id)
    case 'EDIT_EXPENSE':
      return state.map((expense)=> {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense
        }
      })
    default:
      return state
  }
}

// Filters reducer
const filtersReducerDefaultState = {
  text: '', 
  sortBy: 'date', 
  startDate: undefined, 
  endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,     // take full object and print it not chance it
        text: action.text // then chance a copy of it --> good, we don't want to change the original object, not allowed with reducers
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state
  }
}

// timestamps (millisecond)
// 1/01/1970 (unix epoch)

// Get visible expenses depending on the filters
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1
    }
  })
}



// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,  // wat wil je combinen: met welke reducer expenses property is managed by expenses Reducer
    filters: filtersReducer
  })
)

store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({description: 'rent', amount: 100, createdAt: -21000}))
const expenseTwo = store.dispatch(addExpense({description: 'coffee', amount: 300,  createdAt: -1000}))

// store.dispatch(removeExpense({id: expenseOne.expense.id}))
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}))

//store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter())

store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(0))
// store.dispatch(setStartDate())

// store.dispatch(setEndDate(1000))


const demoState = {
  expenses: [{
    id: 'itemone',
    description: 'January rent',
    note: 'This was the final payment for that adress',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortyBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
}


