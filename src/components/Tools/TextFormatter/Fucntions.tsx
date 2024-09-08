import React, { useState } from 'react'
import { TextFormatterState } from './TextFormatterInterface'
const TextFunctions: React.FC<{
  setState: React.Dispatch<React.SetStateAction<TextFormatterState>>
  state: TextFormatterState
}> = ({ setState, state }) => {
  const [fontSizeInput, setFontSizeInput] = useState<string>(
    state.fontSize || '16'
  )
  const toUpperCase = () => {
    setState((prevState) => ({
      ...prevState,
      text: prevState.text.toUpperCase(),
    }))
  }
  const toLowerCase = () => {
    setState((prevState) => ({
      ...prevState,
      text: prevState.text.toLowerCase(),
    }))
  }
  const trimSpaces = () => {
    setState((prevState) => ({
      ...prevState,
      text: prevState.text.trim(),
    }))
  }
  const toCapitalize = () => {
    const capitalizeWords = (text: string): string => {
      return text
        .split(' ')
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(' ')
    }
    setState((prevState) => ({
      ...prevState,
      text: capitalizeWords(prevState.text),
    }))
  }
  const toggleBold = () => {
    setState((prevState) => ({
      ...prevState,
      isBold: !prevState.isBold,
    }))
  }
  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSize = e.target.value
    setFontSizeInput(newSize)
    setState((prevState) => ({
      ...prevState,
      fontSize: newSize,
    }))
  }
  return (
    <div className="mb-4">
      <button
        onClick={toUpperCase}
        className="p-2 bg-[#FF9A8B] text-white rounded mr-2"
      >
        Uppercase
      </button>
      <button
        onClick={toLowerCase}
        className="p-2 bg-[#FF9A8B] text-white rounded mr-2"
      >
        Lowercase
      </button>
      <button
        onClick={trimSpaces}
        className="p-2 bg-[#FF9A8B] text-white rounded mr-2"
      >
        Trim Spaces
      </button>
      <button
        onClick={toCapitalize}
        className="p-2 bg-[#FF9A8B] text-white rounded mr-2"
      >
        Capitalize
      </button>
      <button
        onClick={toggleBold}
        className="p-2 bg-[#FF9A8B] text-white rounded mr-2"
      >
        {state.isBold ? 'Unbold' : 'Bold'}
      </button>
      <div className="mt-10 flex justify-center items-center gap-5">
        <label className="block text-2xl font-extrabold">Font Size</label>
        <input
          type="text"
          value={fontSizeInput}
          onChange={handleFontSizeChange}
          className="p-2 border border-gray-300 rounded w-fit"
          placeholder="e.g., 16px"
        />
      </div>
    </div>
  )
}
export default TextFunctions
