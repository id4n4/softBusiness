import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from 'next-themes'
import 'atropos/css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <NextUIProvider>
    <ThemeProvider attribute='class' defaultTheme='dark'>
      <App />
    </ThemeProvider>
  </NextUIProvider>
)
