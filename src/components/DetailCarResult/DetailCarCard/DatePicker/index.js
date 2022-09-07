import "./style.css"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

//# redux
import { useSelector, useDispatch } from "react-redux"
import TYPES from "../../../../redux/types"

const RentalDate = () => {
  const { startDate, endDate } = useSelector((state) => state.rentalDateReducer)
  const dispatch = useDispatch()

  const handleStartDate = (date) => {
    dispatch({
      type: TYPES.START_DATE,
      payload: date,
    })
  }

  const handleEndDate = (date) => {
    dispatch({
      type: TYPES.END_DATE,
      payload: date,
    })
  }

  return (
    <div className="rental-date">
      <div>
        <DatePicker
          className="rental-date-start"
          selected={startDate}
          onChange={handleStartDate}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          placeholderText="Mulai Sewa"
          closeOnScroll={true}
          required={true}
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <p>to</p>
      <div>
        <DatePicker
          className="rental-date-end"
          selected={endDate}
          onChange={handleEndDate}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          placeholderText="Akhir Sewa"
          closeOnScroll={true}
          required={true}
          dateFormat="dd/MM/yyyy"
        />
      </div>
    </div>
  )
}

export default RentalDate
