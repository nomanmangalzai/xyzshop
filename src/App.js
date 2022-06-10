import React from 'react'
import TopMenu from './components/TopMenu'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './components/products/LandingPage'
import Products from './components/products/products'
import ContactUs from './components/products/ContactUs'
function App() {
  return (
    <Router>
      <div className="App">
        <TopMenu />
        <Routes>
          <Route path="/products" component={Products} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/" component={LandingPage} />
        </Routes>
        <h1>This is my App.js file</h1>
      </div>
    </Router>
  )
}

export default App
