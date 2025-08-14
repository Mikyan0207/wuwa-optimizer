export function IsFloatingPointNumber(value: number): boolean {
  return !Number.isInteger(value) && !Number.isNaN(value)
}
