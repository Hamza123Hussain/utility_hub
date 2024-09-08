// Define the unit conversion function
export const convertLength = (
  value: number,
  fromUnit: string,
  toUnit: string
): number => {
  const unitsInMeters: Record<string, number> = {
    meters: 1,
    kilometers: 1000,
    miles: 1609.34,
    feet: 0.3048,
    inches: 0.0254,
    centimeter: 0.01,
    millimeter: 0.001,
  }

  // Convert from the original unit to meters, then to the target unit
  return (value * unitsInMeters[fromUnit]) / unitsInMeters[toUnit]
}
