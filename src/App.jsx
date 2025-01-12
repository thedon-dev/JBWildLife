import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import Navbar from './components/Navbar'
import WhatWeDoPage from './pages/WhatWeDo'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/whatwedo" element={<WhatWeDoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
