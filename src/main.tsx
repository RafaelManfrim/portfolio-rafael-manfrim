import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { Router } from './Router'

import "antd/dist/reset.css"
import "./styles/main.scss"
import { LanguageContextProvider } from './contexts/LanguageContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageContextProvider>
        <Router />
      </LanguageContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
