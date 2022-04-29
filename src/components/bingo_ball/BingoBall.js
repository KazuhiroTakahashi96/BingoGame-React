import React, { useState } from "react";
import "./BingoBall.css";
import makeBingoBall from "./functions/makeBingoBall";

const BingoBall = () => {
  // 何個目のボールか
  const [ballCount, setBallCount] = useState(0);
  // 引いたボールの番号を表示
  const [showBallNum, setShowBallNum] = useState(0);

  return (
    <div>
      <div>
        <span className="ballCount">{ballCount}</span>
        個目のボール
      </div>
      <br />

      <div className="ballNum">{showBallNum}</div>
      <br />

      <div>
        <button
          className="bingoBall-btn"
          onClick={() => {
            setBallCount(ballCount + 1);
            setShowBallNum(makeBingoBall());
          }}
        >
          ボールを引く
        </button>
      </div>
    </div>
  );
};

export default BingoBall;
