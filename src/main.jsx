import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

/**
 * @fileoverview Entry point of the React application.
 * This file renders the root App component into the DOM.
 */

/**
 * Initializes and renders the React application.
 * It targets the HTML element with the id 'root'.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
