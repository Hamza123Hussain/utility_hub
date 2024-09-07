import React, { useState } from 'react'
const ColorPicker: React.FC = () => {
  const [color, setColor] = useState<string>('#FFFFFF')
  const [rgb, setRgb] = useState<string>('rgb(255, 255, 255)')
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value
    setColor(newColor)
    setRgb(hexToRgb(newColor))
  }
  const hexToRgb = (hex: string): string => {
    let r = 0,
      g = 0,
      b = 0
    // Check if the hex code is in 3-digit format (e.g., #RGB)
    if (hex.length === 4) {
      // Convert each digit to a 2-digit hex number and parse to decimal
      r = parseInt(hex[1] + hex[1], 16) // hex[1] + hex[1] creates a string like 'FF'
      g = parseInt(hex[2] + hex[2], 16) // hex[2] + hex[2] creates a string like 'FF'
      b = parseInt(hex[3] + hex[3], 16) // hex[3] + hex[3] creates a string like 'FF'
    }
    // Check if the hex code is in 6-digit format (e.g., #RRGGBB)
    else if (hex.length === 7) {
      // Extract each color component and convert from hex to decimal
      r = parseInt(hex[1] + hex[2], 16) // hex[1] + hex[2] creates a string like 'FF'
      g = parseInt(hex[3] + hex[4], 16) // hex[3] + hex[4] creates a string like 'FF'
      b = parseInt(hex[5] + hex[6], 16) // hex[5] + hex[6] creates a string like 'FF'
    }
    return `rgb(${r}, ${g}, ${b})`
  }
  return (
    <div className="p-4 flex flex-col justify-between gap-5">
      <h2 className="text-2xl font-extrabold mb-2">Color Picker</h2>
      <input
        type="color"
        value={color}
        onChange={handleColorChange}
        className=" w-full cursor-pointer  rounded-lg"
      />
      <p className="text-2xl font-extrabold mt-4">Selected Color</p>
      <div
        className="w-full h-24 mt-2 rounded-lg"
        style={{ backgroundColor: color, border: '1px solid #ccc' }}
      ></div>
      <p className="mt-2 text-center text-3xl font-extrabold">Hex: {color}</p>
      <p className="text-center text-3xl font-extrabold">RGB: {rgb}</p>
    </div>
  )
}
export default ColorPicker
