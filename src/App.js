import { useState } from "react";
import "./App.css";
import BingoBall from "./components/bingo_ball/BingoBall";
import BingoCard from "./components/bingo_card/BingoCard";
import ShowReachBingo from "./components/show_reach-bingo/ShowReachBingo";

function App() {
  // ビンゴカードの番号を格納する配列
  const cardNumArray = [];

  const makeBingoCard = () => {
    // カードの各列に入るランダムな数字を作る
    //  makeRandomNum(0);
    //  makeRandomNum(15);
    //  makeRandomNum(30);
    //  makeRandomNum(45);
    //  makeRandomNum(60);
  };

  // makeRandomNum(num) {
  //    // 1〜15の数字が入った、長さ75の配列を作成
  //   const baseNum = [];
  //   for (let i = 1; i <= 15; i++) {
  //     baseNum.push(i);
  //   }

  //   for (let i = 0; i < 5; i++) {
  //     // ランダムな値を取得
  //     const randomNum = Math.floor(Math.random() * baseNum.length);
  //     cardNumArray.push(baseNum[randomNum] + num);
  //     // 数字が重複しないよう、元の配列から削除
  //     baseNum.splice(randomNum, 1);
  //   }
  // }

  return (
    <div className="App">
      <header className="App-header">ビンゴゲーム in React </header>

      <div className="container">
        <BingoCard></BingoCard>

        <ShowReachBingo></ShowReachBingo>

        <BingoBall></BingoBall>
      </div>

      <div className="btn">
        <input
          type="button"
          value="カード作成"
          className="makeCard-btn"
          onClick={makeBingoCard}
        />
        <input
          type="button"
          value="ボールを引く"
          className="bingoBall-btn hide"
        />
      </div>
    </div>
  );
}

export default App;
