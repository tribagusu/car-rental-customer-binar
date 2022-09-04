// import "./style.css"
// import React, { useState } from "react"
// import TextField from "@mui/material/TextField"
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
// import { LocalizationProvider } from "@mui/x-date-pickers"
// import { DatePicker } from "@mui/x-date-pickers/DatePicker"

// const RentalDate = () => {
//   const [startDate, setStartDate] = useState(null)
//   const [endDate, setEndDate] = useState(null)
//   console.log("  🔸-> startDate", startDate)
//   console.log("  🔸-> endDate", endDate)

//   return (
//     <div className="rental-date">
//       <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <DatePicker
//           inputFormat="DD/MM/YY"
//           label="Mulai Sewa"
//           value={startDate}
//           onChange={setStartDate}
//           renderInput={(params) => <TextField {...params} />}
//         />
//         <DatePicker
//           inputFormat="DD/MM/YY"
//           label="Akhir Sewa"
//           value={endDate}
//           onChange={setEndDate}
//           renderInput={(params) => <TextField {...params} />}
//         />
//       </LocalizationProvider>
//     </div>
//   )
// }

// export default RentalDate
