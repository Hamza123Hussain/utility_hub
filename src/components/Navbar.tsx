import React from 'react'
import { Link } from 'react-router-dom'
const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#333333] p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">
          <Link to="/" className="hover:text-[#FF9A8B]">
            UtilityHub
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
