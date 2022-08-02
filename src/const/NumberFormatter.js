import NumberFormat from "react-number-format";

const NumberFormatter = (val) => {
  return (
    <div>
      <NumberFormat value={val} decimalSeparator="," thousandSeparator="." />
    </div>
  );
};

export default NumberFormatter;
