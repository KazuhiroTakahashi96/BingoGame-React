import "./App.css";
import BingoBall from "./components/bingo_ball/BingoBall";
import BingoCard from "./components/bingo_card/BingoCard";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <header className="App-header">ビンゴゲーム in React </header>

        <div className="container">
          <BingoCard />
          <BingoBall />
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
