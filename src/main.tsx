import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Portfolio from './components/Portfolio/Portfolio'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <App /> */}
    <Portfolio />
  </React.StrictMode>
)
