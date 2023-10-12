import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages.jsx/Home'
import Register from '../Pages.jsx/Register'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='*' element={<h1>404 Page Not Found!</h1>} />
        </Routes>
    </div>
  )
}

export default Routing