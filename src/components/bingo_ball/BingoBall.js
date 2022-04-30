import React, { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import "./BingoBall.css";
import ShowReachBingo from "./show_reach-bingo/ShowReachBingo";

// 1〜75を持った長さ75の配列の作成
const bingoBallArray = [];
for (let i = 1; i <= 75; i++) {
  bingoBallArray.push(i);
}
// 出たビンゴボールの数字を格納していく配列の作成
const ballNumArray = [];

const BingoBall = () => {
  // 何個目のボールか
  const [ballCount, setBallCount] = useState(0);
  // 引いたボールの番号を表示
  const [showBallNum, setShowBallNum] = useState(0);

  const data = useContext(DataContext);

  // ============= ビンゴボールの数字を作成する関数 ============
  const makeBingoBall = () => {
    // 0〜74の中で、ランダムな値を取得
    const randomNum = Math.floor(Math.random() * bingoBallArray.length);

    // インデックス「randomNum」番目の数字をballNumArrayの先頭に格納
    ballNumArray.unshift(bingoBallArray[randomNum]);

    // 数字が重複しないよう、元の配列から削除
    bingoBallArray.splice(randomNum, 1);

    // 画面に数字を表示
    if (bingoBallArray.length === 0) {
      setShowBallNum(ballNumArray[0]);
      // ボタンを消す
      data.setShowBingoBallBtn(!data.showBingoBallBtn);
    } else {
      setShowBallNum(ballNumArray[0]);
    }

    checkNumber();
  };

  // =========== ボールの数字とカード上の数字のチェックをして =============
  // ======== 一致した場合、カード上のその数字の背景色を変更する関数 =========
  const checkNumber = () => {
    // 引いた数字の値がカード上にある場合、
    if (data.cardNumbersArray.includes(ballNumArray[0])) {
      // インデックス番号を取得する
      const indexNum = data.cardNumbersArray.indexOf(ballNumArray[0]);
      // 背景色を変える＝穴を開ける
      // col_BINGO[indexNum].ariaChecked = "true";
      console.log(indexNum);
    }
    // showReachBing();
  };

  return (
    <div>
      <div>
        <span className="ballCount">{ballCount}</span>
        個目のボール
      </div>
      <br />
      <div className="ballNum">{showBallNum}</div>

      <div>
        <button
          style={data.showBingoBallBtn ? null : { display: "none" }}
          className="bingoBall-btn"
          onClick={() => {
            setBallCount(ballCount + 1);
            makeBingoBall();
          }}
        >
          ボールを引く
        </button>
      </div>
      <br />
      <ShowReachBingo />
    </div>
  );
};

export default BingoBall;
