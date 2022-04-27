import "./App.css";
import BingoBall from "./components/bingo_ball/BingoBall";
import BingoCard from "./components/bingo_card/BingoCard";
import ShowReachBingo from "./components/show_reach-bingo/ShowReachBingo";

function App() {
  return (
    <div className="App">
      <header className="App-header">ビンゴゲーム in React </header>

      <div className="container">
        <BingoCard></BingoCard>

        <ShowReachBingo></ShowReachBingo>

        <BingoBall></BingoBall>
      </div>

      <div className="btn">
        <input type="button" value="カード作成" className="makeCard-btn" />
        <input type="button" value="ボールを引く" className="bingoBall-btn" />
      </div>
    </div>
  );
}

export default App;
