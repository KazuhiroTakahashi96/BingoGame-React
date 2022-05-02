const checkReach = (lineArr, ballNumsArr) => {
  // ===== リーチ数をチェックする関数 =====
  let reachNum = 0;
  for (let i = 0; i < 5; i++) {
    // true(穴が空いてる)なら
    if (ballNumsArr.includes(lineArr[i])) {
      reachNum += 1;
    }
  }
  return reachNum === 4 ? 1 : 0;
};
export default checkReach;
