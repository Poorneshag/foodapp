import React from 'react'
import Nav from './Nav'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Pagenotfound from './Pagenotfound'
import './global.css'
import Addproduct from './Addproduct'
import Viewproduct from './Viewproduct'
import Home from './Home'

const App = () => {
  return (
    <div>
      <Router>
        <Nav />

        <Routes>
          <Route path="/addproduct" element={<Addproduct />} />
          <Route path="/viewproduct" element={<Viewproduct />} />
          <Route path="*" element={<Pagenotfound />} />
          <Route path="/" element={<Home/>}/>
        </Routes>

      </Router>
    </div>
  )
}

export default App