import React from 'react'

const SelectionField = () => {
  return (
    <>
      <option value="meters">Meters</option>
      <option value="kilometers">Kilometers</option>
      <option value="miles">Miles</option>
      <option value="feet">Feet</option>
      <option value="inches">Inches</option>{' '}
      <option value="centimeter">Centimeter</option>{' '}
      <option value="  millimeter">Millimeter</option>
    </>
  )
}

export default SelectionField
