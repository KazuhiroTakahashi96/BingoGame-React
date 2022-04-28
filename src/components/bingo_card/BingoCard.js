import React, { useState } from "react";

const BingoCard = ({ cardNum }) => {
  const [col_B, setCol_B] = useState([]);
  const [col_I, setCol_I] = useState([]);
  const [col_N, setCol_N] = useState([]);
  const [col_G, setCol_G] = useState([]);
  const [col_O, setCol_O] = useState([]);

  console.log(cardNum);
  // setCol_B(col_B.slice(0, 5));
  // setCol_I(col_I.slice(5, 10));
  // setCol_N(col_N.slice(10, 15));
  // setCol_G(col_G.slice(15, 20));
  // setCol_O(col_O.slice(20, 25));

  return (
    <div>
      <section>
        <div>
          <span>B</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
          <span>O</span>
        </div>

        <div className="num-container">
          {col_B.map((num, i) => (
            <p key={i}>{num}</p>
          ))}
        </div>
      </section>

      <input
        type="button"
        value="カード作成"
        className="makeCard-btn"
        // onClick={makeBingoCard}
      />
    </div>
  );
};

export default BingoCard;
