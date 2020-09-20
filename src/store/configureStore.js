import {createStore, combineReducers} from 'redux'
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'

export default () => {
  // Store creation
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,  // wat wil je combinen: met welke reducer expenses property is managed by expenses Reducer
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  // for dev tools
  )
  return store
}

