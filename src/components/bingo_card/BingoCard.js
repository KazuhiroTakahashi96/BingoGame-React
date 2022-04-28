import React from "react";

const BingoCard = ({ cardNum }) => {
  console.log(cardNum);

  return (
    <div>
      <section>
        <div>Bingo Card</div>
        {cardNum.map((num, i, array) => (
          <div key={i}>
            <p>{num}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default BingoCard;
