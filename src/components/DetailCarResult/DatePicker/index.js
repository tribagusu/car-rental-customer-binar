import "./style.css"
import React, { useState } from "react"
import DatePicker from "react-datepicker"
// import DateView from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

const RentalDate = () => {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  return (
    <div className="rental-date">
      <div>
        <DatePicker
          className="rental-date-start"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="Mulai Sewa"
          dateFormat="dd/MMM/yyyy"
          closeOnScroll={true}
        />
      </div>
      <div>
        <DatePicker
          className="rental-date-end"
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText="Akhir Sewa"
          dateFormat="dd/MMM/yyyy"
          closeOnScroll={true}
        />
      </div>
    </div>
  )
}

export default RentalDate
