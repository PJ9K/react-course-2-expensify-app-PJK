import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose   // for dev tools in browser

export default () => {
  // Store creation
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,  // wat wil je combinen: met welke reducer expenses property is managed by expenses Reducer
      filters: filtersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  )
  return store
}

