import { createStore } from 'redux'

// Action generators - functions that return action objects

// const add = ({a, b}) => {
//   return a + b
// }
// console.log(add({a: 1, b: 12}))

// const add = (data) => {
//   return data.a + data.b
// }
// console.log(add({a: 1, b: 2}))


const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy // incrementBy: incrementBy
})

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const setCount = ({count}) => ({
  type: 'SET',
  count
})

const resetCount = () => ({
  type: 'RESET'
})

const countReducer = (state = {count: 0}, action) => {    // default state object
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: 0
      }
    default:
      return state
  } 
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

// increment the count
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// })

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(incrementCount())

store.dispatch(resetCount())

store.dispatch(decrementCount())

store.dispatch(decrementCount({decrementBy: 10}))

store.dispatch(setCount({count:20000}))



