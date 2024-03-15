import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import FAQ from './components/FAQ/FAQ.jsx'

ReactDOM.render(
 <BrowserRouter>
 <App/>
 </BrowserRouter>,
 document.getElementById('root')
 
 //ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
   // <App/>
 // </React.StrictMode>,
)
