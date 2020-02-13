import React from 'react';
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App';
import Dashboard from './components/Dashboard'
import Display from './components/Display'



test('renders without crashing', () => {
  const wrapper = rtl.render(<App/>)
  const element = wrapper.getByText(/balls/i)
  expect(wrapper).toBeVisible
});


test('renders dashboard component', () => {
  const wrapper = rtl.render(<Dashboard/>)
  const element = wrapper.getByText(/hit/i)
  expect(element).toBeInTheDocument()
}) 
test('renders dashboard component', () => {
  const wrapper = rtl.render(<Display/>)
  const element = wrapper.getByText(/strike/i)
  expect(element).toBeInTheDocument()
}) 