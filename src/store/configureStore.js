import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'
import authReducer from '../reducers/auth'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose   // for dev tools in browser

export default () => {
  // Store creation // connect the reducers and actions to the store
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,  // wat wil je combinen: met welke reducer expenses property is managed by expenses Reducer
      filters: filtersReducer,
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  )
  return store
}

