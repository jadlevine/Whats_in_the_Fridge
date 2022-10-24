import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import HouseDetails from './pages/HouseDetails'

// import { useState } from 'react'

const App = () => {
  return (
    <div>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/houses/:owner"
            element={<HouseDetails house={'josh'} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
