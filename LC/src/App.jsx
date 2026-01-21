import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import OurStory from './pages/About/OurStory'
import Vision from './pages/About/Vision'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/story" element={<OurStory />} />
            <Route path="/about/vision" element={<Vision />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
