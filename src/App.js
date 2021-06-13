import React from 'react'
import './App.css'

import Home from './view/pages/home/index.jsx'

function App() {
  return (
    <div className="App">
      {process.env.NODE_ENV}
      <Home />
    </div>
  )
}

export default App
