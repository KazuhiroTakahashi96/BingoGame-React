import { useState } from "react";
import "./App.css";
import BingoBall from "./components/bingo_ball/BingoBall";
import BingoCard from "./components/bingo_card/BingoCard";
import ShowReachBingo from "./components/show_reach-bingo/ShowReachBingo";

function App() {
  const [cardNum, setCardNum] = useState([]);

  // ビンゴカードの番号を格納する配列
  const cardNumArray = [];

  const makeRandomNum = (plus) => {
    // 1〜15の数字が入った、長さ75の配列を作成
    const baseNum = [];
    for (let i = 1; i <= 15; i++) {
      baseNum.push(i);
    }

    for (let i = 0; i < 5; i++) {
      // ランダムな値を取得
      const randomNum = Math.floor(Math.random() * baseNum.length);
      cardNumArray.push(baseNum[randomNum] + plus);
      // 数字が重複しないよう、元の配列から削除
      baseNum.splice(randomNum, 1);
    }
  };

  const makeBingoCard = () => {
    // カードの各列に入るランダムな数字を作る
    makeRandomNum(0);
    makeRandomNum(15);
    makeRandomNum(30);
    makeRandomNum(45);
    makeRandomNum(60);

    setCardNum(cardNumArray);
  };

  return (
    <div className="App">
      <header className="App-header">ビンゴゲーム in React </header>

      <div className="container">
        <BingoCard cardNum={cardNum} />
        <ShowReachBingo />
        <BingoBall />
      </div>
    </div>
  );
}

export default App;
