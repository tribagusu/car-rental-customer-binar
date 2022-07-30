import NumberFormat from "react-number-format";

const NumberFormatter = (val) => {
  return (
    <div>
      <span>
        Rp{" "}
        <NumberFormat value={val} decimalSeparator="," thousandSeparator="." />{" "}
      </span>
    </div>
  );
};

export default NumberFormatter;
