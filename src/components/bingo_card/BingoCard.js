import React, { useState } from "react";
import "./BingoCard.css";
import CardNum from "./card_number/CardNum";

const BingoCard = () => {
  const [colB, setColB] = useState([]);
  const [colI, setColI] = useState([]);
  const [colN, setColN] = useState([]);
  const [colG, setColG] = useState([]);
  const [colO, setColO] = useState([]);

  // ビンゴカードの番号を格納する配列
  const cardNumArray = [];

  // =========== ビンゴカードの数字を作成する関数 ===========
  const makeRandomNum = (plus) => {
    // 1〜15の数字が入った、長さ75の配列を作成
    const baseNum = [];
    for (let i = 1; i <= 15; i++) {
      baseNum.push(i);
    }

    for (let i = 0; i < 5; i++) {
      // ランダムな値を取得
      const randomNum = Math.floor(Math.random() * baseNum.length);
      cardNumArray.push(baseNum[randomNum] + plus);
      // 数字が重複しないよう、元の配列から削除
      baseNum.splice(randomNum, 1);
    }
  };

  // =========== 上で作成した数字を出力する関数 ============
  const makeBingoCard = () => {
    // カードの各列に入るランダムな数字を作る
    makeRandomNum(0);
    makeRandomNum(15);
    makeRandomNum(30);
    makeRandomNum(45);
    makeRandomNum(60);

    // B列、I列、N列、G列、O列の配列
    const col_B = [];
    const col_I = [];
    const col_N = [];
    const col_G = [];
    const col_O = [];
    for (let i = 0; i < 25; i++) {
      // インデックス番号が5未満なら
      if (i < 5) {
        // col_Bに、そのインデックス番号の数字を格納
        col_B.push(cardNumArray[i]);
      } else if (i < 10) {
        col_I.push(cardNumArray[i]);
      } else if (i < 15) {
        col_N.push(cardNumArray[i]);
      } else if (i < 20) {
        col_G.push(cardNumArray[i]);
      } else if (i < 25) {
        col_O.push(cardNumArray[i]);
      }
    }
    setColB(col_B);
    setColI(col_I);
    setColN(col_N);
    setColG(col_G);
    setColO(col_O);
  };

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

      <input
        type="button"
        value="カード作成"
        className="makeCard-btn"
        onClick={makeBingoCard}
      />
    </div>
  );
};

export default BingoCard;
