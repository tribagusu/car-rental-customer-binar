export const rentCalculator2 = (start, end) => {
  const newStartDate = new Date(start).toLocaleDateString("en-AU")
  const newEndDate = new Date(end).toLocaleDateString("en-AU")
  const startDay = newStartDate.slice(2, 3)
  const endDay = newEndDate.slice(2, 3)
  const totalRent = Math.floor(endDay) - Math.floor(startDay)
  return totalRent
}
