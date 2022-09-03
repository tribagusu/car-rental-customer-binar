import { useState } from "react"

const RentalDate = () => {
  const [date, setDate] = useState("")

  const handleDate = (e) => {
    console.log(date)
    setDate(e.target.value)
  }

  return (
    <div>
      <input onChange={handleDate} type="date" value={date} />
    </div>
  )
}

export default RentalDate
