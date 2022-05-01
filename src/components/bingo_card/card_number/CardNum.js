import React from "react";

const CardNum = ({ cardNum, matchedNumArray }) => {
  const numStyle = {
    backgroundColor: "gold",
    borderRadius: "20px 20px 0 0",
  };

  return (
    <div>
      {cardNum.map((num, i) => (
        <p
          style={num === "free" || num === matchedNumArray[0] ? numStyle : null}
          key={i}
        >
          {num}
        </p>
      ))}
    </div>
  );
};

export default CardNum;
