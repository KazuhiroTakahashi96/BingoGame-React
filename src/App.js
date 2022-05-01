import { useContext, useState } from "react";
import "./App.css";
import BingoBall from "./components/bingo_ball/BingoBall";
import BingoCard from "./components/bingo_card/BingoCard";
import ShowReachBingo from "./components/reach_bingo_num/ShowReachBingo";
import { DataContext } from "./context/DataContext";

// ビンゴカードの番号を格納する配列
const cardNumArray = [];

// =========== ビンゴカードの数字を作成する関数 ===========
const makeRandomNum = (plus) => {
  // 1〜15の数字が入った、長さ15の配列を作成
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
// カードの各列に入るランダムな数字を作る
makeRandomNum(0);
makeRandomNum(15);
makeRandomNum(30);
makeRandomNum(45);
makeRandomNum(60);

// 1〜75を持った長さ75の配列の作成
const bingoBallArray = [];
for (let i = 1; i <= 75; i++) {
  bingoBallArray.push(i);
}

// 出たビンゴボールの数字を格納していく配列の作成
const ballNumArray = [];

// ===============================================================
// ===============================================================
// ===============================================================
function App() {
  const data = useContext(DataContext);

  // 何個目のボールか
  const [ballCount, setBallCount] = useState(0);
  // 引いたボールの番号を表示
  const [showBallNum, setShowBallNum] = useState(0);

  // ============= ビンゴボールの数字を作成する関数 ============
  const makeBingoBall = () => {
    // 0〜74の中で、ランダムな値を取得
    const randomNum = Math.floor(Math.random() * bingoBallArray.length);

    // インデックス「randomNum」番目の数字をballNumArrayの先頭に格納
    ballNumArray.unshift(bingoBallArray[randomNum]);

    // 画面に数字を表示
    // 75回引き終わった場合
    if (bingoBallArray.length === 1) {
      setShowBallNum(ballNumArray[0]);
      // ボタンを消す
      data.setShowBingoBallBtn(!data.showBingoBallBtn);
    } else {
      setShowBallNum(ballNumArray[0]);
    }

    // 数字が重複しないよう、元の配列から削除
    bingoBallArray.splice(randomNum, 1);

    // checkNumber();
  };

  return (
    <div className="App">
      <header className="App-header">ビンゴゲーム in React </header>

      <div className="container">
        <BingoCard cardNumArray={cardNumArray} />
        <ShowReachBingo cardNumArray={cardNumArray} />
        <BingoBall ballCount={ballCount} showBallNum={showBallNum} />
      </div>

      <div>
        <button
          style={data.showBingoBallBtn ? null : { display: "none" }}
          onClick={() => {
            setBallCount(ballCount + 1);
            makeBingoBall();
          }}
        >
          ボールを引く
        </button>
      </div>
    </div>
  );
}

export default App;
