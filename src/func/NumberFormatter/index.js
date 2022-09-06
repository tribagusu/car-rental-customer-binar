import NumberFormat from "react-number-format"

export const numberFormatter = (value) => {
  return (
    <NumberFormat
      value={value}
      decimalSeparator=","
      thousandSeparator="."
      disabled
    />
  )
}

export const currencyFormatter = (value) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(value)
