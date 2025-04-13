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
      
        <Router />
     
    </div>
    </QueryClientProvider>
    
  )
}

export default App
