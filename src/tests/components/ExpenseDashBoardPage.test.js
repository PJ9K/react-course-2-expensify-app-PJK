import React from 'react'
import ExpenseDashBoardPage from '../../components/ExpenseDashBoardPage'
import { shallow } from 'enzyme'
// react-test-renderer

test('should render ExpenseDashBoardPage correctly', () => {
  const wrapper = shallow(<ExpenseDashBoardPage />)
  expect(wrapper).toMatchSnapshot()
})
