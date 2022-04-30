import React, { useState } from "react";

const CardNum = ({ cardNum }) => {
  const [matchedNum, setMatchedNum] = useState(false);

  const numStyle = {
    backgroundColor: "gold",
    borderRadius: "20px 20px 0 0",
  };

  return (
    <div>
      {cardNum.map((num, i) => (
        <p style={cardNum[i] === "free" ? numStyle : null} key={i}>
          {num}
        </p>
      ))}
    </div>
  );
};

export default CardNum;
