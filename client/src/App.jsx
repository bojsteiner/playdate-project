import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import PlaygroundsPage from './views/PlaygroundsPage'
import HomePage from './views/HomePage'

const location = {
  "name": "Krusi",
  "address": "123 fake street",
  "imageUrl": "https://www.510families.com/wp-content/uploads/2019/02/IMG_8793-1.jpg"
}

function App() {

  return (
    <>
     <Routes>
     <Route path="/" element={<HomePage />} />
      <Route path="/playgrounds" element={<PlaygroundsPage/>} />
      {/* Add your other routes here */}
      </Routes>
    </>
  )
}

export default App
