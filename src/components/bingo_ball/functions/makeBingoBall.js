import checkNumber from "./checkNumber";

// 1〜75を持った長さ75の配列の作成
const bingoBallArray = [];
for (let i = 1; i <= 75; i++) {
  bingoBallArray.push(i);
}
// 出たビンゴボールの数字を格納していく配列の作成
const ballNumArray = [];

const makeBingoBall = () => {
  // ============= ビンゴボールの数字を作成する関数 ============
  // 0〜74の中で、ランダムな値を取得
  const randomNum = Math.floor(Math.random() * bingoBallArray.length);

  // インデックス「randomNum」番目の数字をballNumArrayの先頭に格納
  ballNumArray.unshift(bingoBallArray[randomNum]);

  // 数字が重複しないよう、元の配列から削除
  bingoBallArray.splice(randomNum, 1);

  // 画面に数字を表示
  //   BingoBall.setShowBallNum(ballNumArray[0]);

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
  console.log(bingoBallArray);
  console.log(ballNumArray);

  //   return ballNumArray[0];

  checkNumber();
};

export default makeBingoBall;
