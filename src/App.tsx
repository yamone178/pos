import React from 'react'
import Layout from './layout/layout'
import CreateOrder from './pages/CreateOrder'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Router from './router/router'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="">
      
      {/* sidebar */}
      <Layout > 
        <Router />
      </Layout>
    </div>
    </QueryClientProvider>
    
  )
}

export default App
