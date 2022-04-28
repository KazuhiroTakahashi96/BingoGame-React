import React, { useState } from "react";

const BingoBall = () => {
  // 何個目のボールか
  const [ballCount, setBallCount] = useState(0);

  // 1〜75を持った長さ75の配列の作成
  const bingoBallArray = [];
  for (let i = 1; i <= 75; i++) {
    bingoBallArray.push(i);
  }
  // 出たビンゴボールの数字を格納していく配列の作成
  const ballNumArray = [];

  return (
    <div>
      <div>
        <span>{ballCount}</span>
        個目のボール
      </div>
      <br />

      <div></div>
      <br />

      <div>
        <input
          type="button"
          value="ボールを引く"
          className="bingoBall-btn"
          onClick={() => setBallCount(ballCount + 1)}
        />
      </div>
    </div>
  );
};

export default BingoBall;
