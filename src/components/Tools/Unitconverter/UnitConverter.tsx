import React, { useState, ChangeEvent, MouseEvent } from 'react'
import { convertLength } from './ConverterFunction'
import { UnitConverterState } from './ConverterInterface'
import SelectionField from './SelectionField'

const UnitConverter: React.FC = () => {
  const [state, setState] = useState<UnitConverterState>({
    value: 0,
    fromUnit: 'meters',
    toUnit: 'kilometers',
    result: null,
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target

    setState((prevState) => ({
      ...prevState,
      [name]: name === 'value' ? Number(value) : value,
    }))
  }

  // Perform the conversion and update the result
  const handleConvert = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault() // Prevent any default button behavior
    const result = convertLength(state.value, state.fromUnit, state.toUnit)
    setState((prevState) => ({
      ...prevState,
      result,
    }))
  }

  return (
    <div className="p-4 flex flex-col items-center bg-[#333333] text-white">
      <h2 className="text-3xl sm:text-5xl font-extrabold mb-4">
        Unit Converter
      </h2>
      <div className="mb-4">
        <label className="block mb-2 font-extrabold">Value</label>
        <input
          type="number"
          name="value"
          value={state.value}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded bg-[#555555] text-white"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-extrabold">From Unit</label>
        <select
          name="fromUnit"
          value={state.fromUnit}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded bg-[#555555] text-white"
        >
          <SelectionField />
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-extrabold">To Unit</label>
        <select
          name="toUnit"
          value={state.toUnit}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded bg-[#555555] text-white"
        >
          <SelectionField />
        </select>
      </div>
      <button
        onClick={handleConvert}
        className="p-2 w-[50vw] bg-[#FF9A8B] text-white rounded"
      >
        Convert
      </button>
      {state.result !== null && (
        <p className="mt-4 font-extrabold text-2xl">
          Result: {state.result} {state.toUnit}
        </p>
      )}
    </div>
  )
}

export default UnitConverter
