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

const ShowReachBingo = ({ cardNumArray, numbersArr }) => {
  const [reachNumber, setReachNumber] = useState(0);
  const [bingoNumber, setBingoNumber] = useState(0);

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
    col_N[2] = "free";

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
    row_3[2] = "free";

    // 斜め列の数字を、用意した配列に格納
    for (let i = 0; i <= 24; i += 6) {
      cross_1.push(cardNumArray[i]);
    }
    for (let i = 4; i <= 20; i += 4) {
      cross_2.push(cardNumArray[i]);
    }
    cross_1[2] = "free";
    cross_2[2] = "free";
  }, [cardNumArray]);

  if (numbersArr === undefined) numbersArr = [];

  // リーチ数
  const totalReachNumber =
    checkReach(col_B, numbersArr) +
    checkReach(col_I, numbersArr) +
    checkReach(col_N, numbersArr) +
    checkReach(col_G, numbersArr) +
    checkReach(col_O, numbersArr) +
    checkReach(row_1, numbersArr) +
    checkReach(row_2, numbersArr) +
    checkReach(row_3, numbersArr) +
    checkReach(row_4, numbersArr) +
    checkReach(row_5, numbersArr) +
    checkReach(cross_1, numbersArr) +
    checkReach(cross_2, numbersArr);
  useEffect(() => {
    // 画面に出力
    setReachNumber(totalReachNumber);
  }, [totalReachNumber]);

  // ビンゴ数
  const totalBingoNumber =
    checkBingo(col_B, numbersArr) +
    checkBingo(col_I, numbersArr) +
    checkBingo(col_N, numbersArr) +
    checkBingo(col_G, numbersArr) +
    checkBingo(col_O, numbersArr) +
    checkBingo(row_1, numbersArr) +
    checkBingo(row_2, numbersArr) +
    checkBingo(row_3, numbersArr) +
    checkBingo(row_4, numbersArr) +
    checkBingo(row_5, numbersArr) +
    checkBingo(cross_1, numbersArr) +
    checkBingo(cross_2, numbersArr);
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
