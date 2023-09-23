import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Nav from './pages/Nav'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { About, Contact, Services, Login} from './pages'
import Assessment from './components/Assessment.jsx'

import './App.css'

const App = () => {
  return (
    <>
    <BrowserRouter>
        <div>
            <div className="bg-slate-900">
              <Nav/>
            </div>
            <div>
              <Footer/>
            </div>
        </div>
        <Routes>
          <Route path='/' exact element={<Hero/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/assessment' element={<Assessment />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
