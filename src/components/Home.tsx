import React from 'react'
import { Link } from 'react-router-dom'

const HomePage: React.FC = () => {
  return (
    <div className="bg-[#333333] min-h-screen text-white">
      {/* Features Section */}
      <section className="container mx-auto mt-12 p-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-[#FF9A8B] mb-8">
          Explore Our Tools
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full text-justify">
          {/* Color Picker */}
          <Link
            to="/ColorPicker"
            className="bg-[#444444] p-6 rounded-lg text-center hover:bg-[#555555] transition-all"
          >
            <h3 className="text-2xl font-semibold mb-2">🎨 Color Picker</h3>
            <p>
              Pick colors, explore palettes, and get HEX, RGB, and HSL values.
            </p>
          </Link>

          {/* Unit Converter */}
          <Link
            to="/UnitConverter"
            className="bg-[#444444] p-6 rounded-lg text-center hover:bg-[#555555] transition-all"
          >
            <h3 className="text-2xl font-semibold mb-2">⚙️ Unit Converter</h3>
            <p>Convert units quickly for length, weight, and more.</p>
          </Link>

          {/* Image Resizer */}
          <Link
            to="/Resize"
            className="bg-[#444444] p-6 rounded-lg text-center hover:bg-[#555555] transition-all"
          >
            <h3 className="text-2xl font-semibold mb-2">🖼️ Image Resizer</h3>
            <p>Resize images to your custom dimensions easily.</p>
          </Link>

          {/* Text Formatter */}
          <Link
            to="/TextFormat"
            className="bg-[#444444] p-6 rounded-lg text-center hover:bg-[#555555] transition-all"
          >
            <h3 className="text-2xl font-semibold mb-2">📝 Text Formatter</h3>
            <p>Format your text, adjust font size, alignment, and more.</p>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage
