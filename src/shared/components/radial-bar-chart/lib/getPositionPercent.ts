export const getPositionPercent = (value: number) => {
  if (value === 100) return 10
  if (value > 9) return 14

  return 17
}
