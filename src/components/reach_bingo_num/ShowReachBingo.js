import React, { useEffect, useState } from "react";
import checkBingo from "../functions/checkBingoNum";
import checkReach from "../functions/checkReachNum";

const reachBingoNumStyle = {
  fontSize: "30px",
  fontWeight: "bold",
};
// B列、I列、N列、G列、O列の配列（縦列）
const col_B = [];
const col_I = [];
const col_N = [];
const col_G = [];
const col_O = [];

// 横列
const row_1 = [];
const row_2 = [];
const row_3 = [];
const row_4 = [];
const row_5 = [];

// 斜め列
const cross_1 = [];
const cross_2 = [];

const ballNumbersArray = [];

const ShowReachBingo = ({ cardNumArray, ballNumber }) => {
  const [reachNumber, setReachNumber] = useState(0);
  const [bingoNumber, setBingoNumber] = useState(0);

  ballNumbersArray.unshift(ballNumber);

  useEffect(() => {
    // 縦列の数字を、用意した配列に格納
    for (let i = 0; i < 25; i++) {
      // iが5未満なら
      if (i < 5) {
        // col_Bに、そのi=インデックス番号の数字を格納
        col_B.push(cardNumArray[i]);
        // 10未満なら
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
    // 横列の数字を、用意した配列に格納
    for (let i = 0; i < 25; i += 5) {
      for (let j = 0; j < 5; j++) {
        if (j === 0) {
          row_1.push(cardNumArray[i]);
        } else if (j === 1) {
          row_2.push(cardNumArray[i + j]);
        } else if (j === 2) {
          row_3.push(cardNumArray[i + j]);
        } else if (j === 3) {
          row_4.push(cardNumArray[i + j]);
        } else if (j === 4) {
          row_5.push(cardNumArray[i + j]);
        }
      }
    }
    // 斜め列の数字を、用意した配列に格納
    for (let i = 0; i <= 24; i += 6) {
      cross_1.push(cardNumArray[i]);
    }
    for (let i = 4; i <= 20; i += 4) {
      cross_2.push(cardNumArray[i]);
    }
  }, [cardNumArray]);

  // リーチ数
  const totalReachNumber =
    checkReach(col_B, ballNumbersArray) +
    checkReach(col_I, ballNumbersArray) +
    checkReach(col_N, ballNumbersArray) +
    checkReach(col_G, ballNumbersArray) +
    checkReach(col_O, ballNumbersArray) +
    checkReach(row_1, ballNumbersArray) +
    checkReach(row_2, ballNumbersArray) +
    checkReach(row_3, ballNumbersArray) +
    checkReach(row_4, ballNumbersArray) +
    checkReach(row_5, ballNumbersArray) +
    checkReach(cross_1, ballNumbersArray) +
    checkReach(cross_2, ballNumbersArray);
  useEffect(() => {
    // 画面に出力
    setReachNumber(totalReachNumber);
  }, [totalReachNumber]);

  // ビンゴ数
  const totalBingoNumber =
    checkBingo(col_B, ballNumbersArray) +
    checkBingo(col_I, ballNumbersArray) +
    checkBingo(col_N, ballNumbersArray) +
    checkBingo(col_G, ballNumbersArray) +
    checkBingo(col_O, ballNumbersArray) +
    checkBingo(row_1, ballNumbersArray) +
    checkBingo(row_2, ballNumbersArray) +
    checkBingo(row_3, ballNumbersArray) +
    checkBingo(row_4, ballNumbersArray) +
    checkBingo(row_5, ballNumbersArray) +
    checkBingo(cross_1, ballNumbersArray) +
    checkBingo(cross_2, ballNumbersArray);
  useEffect(() => {
    // 画面に出力
    setBingoNumber(totalBingoNumber);
  }, [totalBingoNumber]);

  return (
    <div style={{ width: "100%" }}>
      <div>リーチ数</div>
      <div style={reachBingoNumStyle}>{reachNumber}</div>
      <br />
      <br />
      <div>ビンゴ数</div>
      <div style={reachBingoNumStyle}>{bingoNumber}</div>
    </div>
  );
};

export default ShowReachBingo;
