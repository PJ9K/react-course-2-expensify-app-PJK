import moment from 'moment'

// Filters reducer
const filtersReducerDefaultState = {
  text: '', 
  sortBy: 'date', 
  startDate: moment().startOf('month'),  // begin of the current month
  endDate: moment().endOf('month')      // end of the current month
}


export default (state = filtersReducerDefaultState, action) => {
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