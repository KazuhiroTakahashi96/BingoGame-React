import "./App.css";
import BingoBall from "./components/bingo_ball/BingoBall";
import BingoCard from "./components/bingo_card/BingoCard";
import ShowReachBingo from "./components/show_reach-bingo/ShowReachBingo";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <header className="App-header">ビンゴゲーム in React </header>

        <div className="container">
          <BingoCard />
          <ShowReachBingo />
          <BingoBall />
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
