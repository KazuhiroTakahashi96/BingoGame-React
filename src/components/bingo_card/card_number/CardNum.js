import React from "react";

const numStyle = {
  backgroundColor: "gold",
  borderRadius: "20px 20px 0 0",
};

const CardNum = ({ cardNum, matchedNumArray }) => {
  // console.log(cardNum);
  // console.log(matchedNumArray);
  return (
    <div>
      {cardNum.map((num, i) => (
        <p
          style={
            num === "free" || matchedNumArray.includes(num) ? numStyle : null
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
