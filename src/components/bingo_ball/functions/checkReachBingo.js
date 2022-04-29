const checkReachBingo = () => {
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
};

export default checkReachBingo;
