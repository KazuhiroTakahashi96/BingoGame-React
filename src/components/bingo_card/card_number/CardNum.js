import React from "react";

const CardNum = ({ cardNum }) => {
  return (
    <div>
      {cardNum.map((num, i) => (
        <p key={i}>{num}</p>
      ))}
    </div>
  );
};

export default CardNum;
