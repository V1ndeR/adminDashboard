import { render, screen } from '@testing-library/react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import '@testing-library/jest-dom'

import App from './App'

import Users from './components/Users/Users'


const queryClient = new QueryClient()

test('render dashboard title', () => {
  render(
    <QueryClientProvider client={queryClient}>
      <App/>
    </QueryClientProvider>
  )
  const title = screen.getByText('Dashboard')
  expect(title).toBeInTheDocument()
})

test('renders component users', () => {
  render(
    <QueryClientProvider client={queryClient}>
      <Users/>
    </QueryClientProvider>
  )
  const title = screen.getByText('All users')
  expect(title).toBeInTheDocument()
})

