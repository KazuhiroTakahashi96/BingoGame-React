import React, { useState } from "react";
import "./BingoCard.css";
import makeBingoCard from "./functions/bingoCardFunc";
import CardNum from "./card_number/CardNum";

const BingoCard = () => {
  const [colB, setColB] = useState([]);
  const [colI, setColI] = useState([]);
  const [colN, setColN] = useState([]);
  const [colG, setColG] = useState([]);
  const [colO, setColO] = useState([]);

  return (
    <div className="card-container">
      <div className="bingo">
        <p>B</p>
        <p>I</p>
        <p>N</p>
        <p>G</p>
        <p>O</p>
      </div>

      <div className="cardNum-container">
        <CardNum cardNum={colB} />
        <CardNum cardNum={colI} />
        <CardNum cardNum={colN} />
        <CardNum cardNum={colG} />
        <CardNum cardNum={colO} />
      </div>
      <br />

      <button className="makeCard-btn" onClick={makeBingoCard}>
        カード作成
      </button>
    </div>
  );
};

export default BingoCard;
