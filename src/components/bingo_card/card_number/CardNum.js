import React, { useContext } from "react";
import { DataContext } from "../../../context/DataContext";

const matchedNumberArray = [];

const CardNum = ({ cardNum }) => {
  // const data = useContext(DataContext);

  const numStyle = {
    backgroundColor: "gold",
    borderRadius: "20px 20px 0 0",
  };

  return (
    <div>
      {cardNum.map((num, i) => (
        <p
          style={
            num === "free" || matchedNumberArray.includes(num) ? numStyle : null
          }
          key={i}
        >
          {num}
        </p>
      ))}
    </div>
  );
};

export default CardNum;
