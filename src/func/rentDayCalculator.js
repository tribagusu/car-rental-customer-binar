export const rentDayCalculator = (start, end) => {
  const newStartDate = new Date(start).toLocaleDateString("en-AU")
  const newEndDate = new Date(end).toLocaleDateString("en-AU")
  const startDay = newStartDate.slice(0, 2)
  const endDay = newEndDate.slice(0, 2)
  const rentDayTotal = Math.floor(endDay) - Math.floor(startDay)
  return rentDayTotal
}
