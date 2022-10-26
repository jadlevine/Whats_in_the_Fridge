import './styles/App.css'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import About from './pages/About'
import Houses from './pages/Houses'
import HouseDetails from './pages/HouseDetails'
import FoodDetails from './pages/FoodDetails'
import Nav from './components/Nav'
// import { useState, useEffect } from 'react'

const App = () => {
  //this is where ALL the page routes get set
  return (
    <div>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/houses" element={<Houses />} />
          <Route path="/houses/:houseid" element={<HouseDetails />} />
          <Route path="/foods/:id" element={<FoodDetails />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
