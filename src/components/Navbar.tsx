import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPalette,
  faCogs,
  faListAlt,
  faTextHeight,
  faExpandArrowsAlt,
} from '@fortawesome/free-solid-svg-icons'

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#333333] p-4 text-white border-b-2">
      <div className="container mx-auto flex flex-col gap-5 sm:flex-row justify-between items-center">
        <div className="text-lg font-semibold">
          <Link to="/" className="flex items-center hover:text-[#FF9A8B]">
            <img src="Logo.png" width={50} alt="" />
            <span>UtilityHub</span>
          </Link>
        </div>
        <div className=" flex flex-col sm:flex-row gap-10">
          <Link
            to="/ColorPicker"
            className="flex items-center hover:text-[#FF9A8B]"
          >
            <FontAwesomeIcon icon={faPalette} className="mr-2" /> Color Picker
          </Link>
          <Link
            to="/UnitConverter"
            className="flex items-center hover:text-[#FF9A8B]"
          >
            <FontAwesomeIcon icon={faCogs} className="mr-2" /> Unit Converter
          </Link>
          <Link to="/Resize" className="flex items-center hover:text-[#FF9A8B]">
            <FontAwesomeIcon icon={faExpandArrowsAlt} className="mr-2" /> Image
            Resize
          </Link>
          <Link
            to="/TextFormat"
            className="flex items-center hover:text-[#FF9A8B]"
          >
            <FontAwesomeIcon icon={faTextHeight} className="mr-2" /> Text
            Formatter
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
