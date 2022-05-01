import React from "react";
import "./BingoBall.css";

// 引いた数字とカード上の数字が一致した時、その数字を格納する配列
const matchedNumArray_B = [];
const matchedNumArray_I = [];
const matchedNumArray_N = [];
const matchedNumArray_G = [];
const matchedNumArray_O = [];

const BingoBall = ({ cardNumArray, ballCount, showBallNum }) => {
  // =========== ボールの数字とカード上の数字のチェックをして =============
  // ======== 一致した場合、カード上のその数字の背景色を変更する関数 =========
  // const checkNumber = () => {
  //   // 引いた数字の値がカード上にある場合、
  //   if (cardNumArray.includes(ballNumArray[0])) {
  //     // インデックス番号を取得する
  //     // const indexNum = cardNumArray.indexOf(ballNumArray[0]);
  //     // console.log(indexNum);

  //     // const matchedNumber = cardNumArray[indexNum];
  //     // console.log(matchedNumber);
  //     if (ballNumArray[0] <= 15) {
  //       matchedNumArray_B.unshift(ballNumArray[0]);
  //       data.setMatchedNum_B(matchedNumArray_B);
  //     } else if (ballNumArray[0] <= 30) {
  //       matchedNumArray_I.unshift(ballNumArray[0]);
  //       data.setMatchedNum_I(matchedNumArray_I);
  //     } else if (ballNumArray[0] <= 45) {
  //       matchedNumArray_N.unshift(ballNumArray[0]);
  //       data.setMatchedNum_N(matchedNumArray_N);
  //     } else if (ballNumArray[0] <= 60) {
  //       matchedNumArray_G.unshift(ballNumArray[0]);
  //       data.setMatchedNum_G(matchedNumArray_G);
  //     } else if (ballNumArray[0] <= 75) {
  //       matchedNumArray_O.unshift(ballNumArray[0]);
  //       data.setMatchedNum_O(matchedNumArray_O);
  //     }
  //     // 背景色を変える＝穴を開ける
  //   }
  //   // showReachBing();
  // };

  return (
    <div className="ball-container">
      <div>
        <span className="ballCount">{ballCount}</span>
        個目のボール
      </div>
      <br />
      <div className="ballNum">{showBallNum}</div>

      <br />
    </div>
  );
};

export default BingoBall;
