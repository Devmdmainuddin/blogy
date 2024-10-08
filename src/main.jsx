import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import store from './app/store'
import { Provider } from 'react-redux'
import {store} from './Feature/store/store.js'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthProvider from './providers/AuthProvider.jsx'

const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <App />
    </AuthProvider>
    </QueryClientProvider>
    </Provider>
    
  </StrictMode>,
)
