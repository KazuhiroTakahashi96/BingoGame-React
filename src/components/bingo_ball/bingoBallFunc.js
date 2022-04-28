import React from "react";

const bingoBallFunc = () => {
  // ============= ビンゴボールの数字を作成する関数 ============
  const makeBingoBall = () => {
    // 0〜74の中で、ランダムな値を取得
    // const randomNum = Math.floor(Math.random() * bingoBallArray.length);
    // ballNumArray.unshift(bingoBallArray[randomNum]);
    // // 数字が重複しないよう、元の配列から削除
    // bingoBallArray.splice(randomNum, 1);
    // 画面に数字を表示
    // if (bingoBallArray.length === 0) {
    //   ballNum.innerHTML = ballNumArray[0];
    //   ballBtn.classList.add("hide");
    //   setTimeout(() => {
    //     end.innerHTML = "終了";
    //   }, 1500);
    // } else {
    //   ballNum.innerHTML = ballNumArray[0];
    // }
    // checkNumber();
  };

  // =========== ボールの数字とカード上の数字のチェックをして =============
  // ======== 一致した場合、カード上のその数字の背景色を変更する関数 =========
  // const checkNumber = () => {
  //   // 引いた数字の値がカード上にある場合、
  //   if (bingoCard.cardNumArray.includes(this.ballNumArray[0])) {
  //     // インデックス番号を取得する
  //     const indexNum = bingoCard.cardNumArray.indexOf(this.ballNumArray[0]);
  //     // 背景色を変える＝穴を開ける
  //     col_BINGO[indexNum].ariaChecked = "true";
  //   }

  //   this.showReachBing();
  // };

  // // ========== リーチ数、ビンゴ数をチェック、出力する関数 ============
  // // ===== リーチ数をチェックする関数 =====
  // const checkReachNum = (el) => {
  //   let reachNum = 0;
  //   for (let i = 0; i < 5; i++) {
  //     // true(穴が空いてる)なら
  //     if (el[i].ariaChecked === "true") {
  //       reachNum += 1;
  //     }
  //   }
  //   return reachNum / 4 === 1 ? 1 : 0;
  // };

  // // ===== ビンゴ数をチェックする関数 =====
  // const checkBingoNum = (el) => {
  //   let bingoNum = 0;
  //   for (let i = 0; i < 5; i++) {
  //     // true(穴が空いてる)なら
  //     if (el[i].ariaChecked === "true") {
  //       bingoNum += 1;
  //     }
  //   }
  //   return bingoNum / 5 === 1 ? 1 : 0;
  // };

  // // ===== 画面に出力する関数 =====
  // const showReachBing = () => {
  //   // リーチ数
  //   const totalReachNumber =
  //     this.checkReachNum(col_B) +
  //     this.checkReachNum(col_I) +
  //     this.checkReachNum(col_N) +
  //     this.checkReachNum(col_G) +
  //     this.checkReachNum(col_O) +
  //     this.checkReachNum(row_1) +
  //     this.checkReachNum(row_2) +
  //     this.checkReachNum(row_3) +
  //     this.checkReachNum(row_4) +
  //     this.checkReachNum(row_5) +
  //     this.checkReachNum(cross1) +
  //     this.checkReachNum(cross2);

  //   // ビンゴ数
  //   const totalBingoNumber =
  //     this.checkBingoNum(col_B) +
  //     this.checkBingoNum(col_I) +
  //     this.checkBingoNum(col_N) +
  //     this.checkBingoNum(col_G) +
  //     this.checkBingoNum(col_O) +
  //     this.checkBingoNum(row_1) +
  //     this.checkBingoNum(row_2) +
  //     this.checkBingoNum(row_3) +
  //     this.checkBingoNum(row_4) +
  //     this.checkBingoNum(row_5) +
  //     this.checkBingoNum(cross1) +
  //     this.checkBingoNum(cross2);

  //   reachNum.innerHTML = totalReachNumber;
  //   bingoNum.innerHTML = totalBingoNumber;
  // };
  return;
};

export default bingoBallFunc;
