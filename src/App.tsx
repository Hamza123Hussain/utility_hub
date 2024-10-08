import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import ColorPicker from './components/Tools/ColorPicker'
import UnitConverter from './components/Tools/Unitconverter/UnitConverter'
import TextFormatter from './components/Tools/TextFormatter/TextFormatter'
import ImageResizer from './components/Tools/Imageresize/resize'
import HomePage from './components/Home'

const App: React.FC = () => {
  return (
    <div className=" flex flex-col bg-[#333333] min-h-screen  ">
      <Navbar />
      <div className=" flex-1 my-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ColorPicker" element={<ColorPicker />} />
          <Route path="/UnitConverter" element={<UnitConverter />} />
          <Route path="/Resize" element={<ImageResizer />} />
          <Route path="/TextFormat" element={<TextFormatter />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
export default App
