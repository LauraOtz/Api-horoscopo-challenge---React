import { useState, useEffect } from "react";
import { getSigns } from "../service/getSigns";

const SelectSign = ({ onSignSelected }) => {
  const [signs, setSigns] = useState([]);

  useEffect(() => {
    getSigns().then(setSigns);
  }, []);

  return (
    <>
      <h2> Please select a sign </h2>

      <div className="grid">
        {signs.map((sign) => (
          <button
            className="sign"
            key={sign}
            onClick={() => onSignSelected(sign)}
          >
            {sign}
          </button>
        ))}
      </div>
    </>
  );
};
export default SelectSign;
