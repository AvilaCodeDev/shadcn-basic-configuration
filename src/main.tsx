import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRouter } from './router/AppRouter.tsx'

import './index.css'
import { GlobalContextProvider } from './context/GlobalContext.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalContextProvider>
      <AppRouter />
    </GlobalContextProvider>
  </StrictMode>,
)
