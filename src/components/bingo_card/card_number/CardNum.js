import React from "react";

const numStyle = {
  backgroundColor: "gold",
  borderRadius: "20px 20px 0 0",
};

const CardNum = ({ cardNum, ballNumbersArray }) => {
  return (
    <div>
      {cardNum.map((num, i) => (
        <p
          style={
            num === "free" || ballNumbersArray.includes(num) ? numStyle : null
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
