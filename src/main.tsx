import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { persistor, store } from './redux/store.ts'
import { Provider } from 'react-redux'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import App from './App.tsx'
import { PersistGate } from 'redux-persist/integration/react'


const queryClient = new QueryClient()


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
             <App />
          </PersistGate>
         

      </Provider>
      </QueryClientProvider>
  
    
    
  </StrictMode>,
)
