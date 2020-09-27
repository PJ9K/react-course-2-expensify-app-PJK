import React from 'react'
import { shallow } from 'enzyme'
import { AddExpensePage } from '../../components/AddExpensePage'
import expenses from '../fixtures/expenses'

let startAddExpense, history, wrapper

beforeEach(() => {            // do this before each test, you can put them in the test instead of one time in front
  startAddExpense = jest.fn()
  history = { push: jest.fn() }
  wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />)
})

test('should render AddExpensePage', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should hande onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
  expect(history.push).toHaveBeenLastCalledWith('/')
  expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1])
})
