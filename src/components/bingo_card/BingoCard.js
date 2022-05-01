import React from "react";
import "./BingoCard.css";
import MakeBingoCard from "./make_bingoCard/MakeBingoCard";

const BingoCard = ({ cardNumArray }) => {
  return (
    <div className="card-container">
      <div className="bingo">
        <p>B</p>
        <p>I</p>
        <p>N</p>
        <p>G</p>
        <p>O</p>
      </div>

      <div>
        <MakeBingoCard cardNumArray={cardNumArray} />
      </div>
      <br />
    </div>
  );
};

export default BingoCard;
