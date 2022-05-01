import React from "react";

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

const ShowReachBingo = ({ cardNumArray }) => {
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

  return (
    <div>
      <div>リーチ数</div>
      <div style={reachBingoNumStyle}>0</div>
      <br />
      <br />
      <div>ビンゴ数</div>
      <div style={reachBingoNumStyle}>0</div>
    </div>
  );
};

export default ShowReachBingo;
