import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import ColorPicker from './components/Tools/ColorPicker'
const App: React.FC = () => {
  return (
    <div className=" flex flex-col gap-2 ">
      <Navbar />
      <div className=" flex-1">
        <Routes>
          <Route path="/" element={<ColorPicker />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
export default App
