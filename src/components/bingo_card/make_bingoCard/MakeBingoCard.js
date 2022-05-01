import { useContext, useState } from "react";
import { DataContext } from "../../../context/DataContext";
import CardNum from "../card_number/CardNum";

// B列、I列、N列、G列、O列の配列（縦列）
const col_B = [];
const col_I = [];
const col_N = [];
const col_G = [];
const col_O = [];

// 横列
const row_1 = [];
const row_2 = [];
const row_3 = [];
const row_4 = [];
const row_5 = [];

// 斜め列
const cross_1 = [];
const cross_2 = [];

const MakeBingoCard = ({ cardNumArray }) => {
  const data = useContext(DataContext);

  const [colB, setColB] = useState([]);
  const [colI, setColI] = useState([]);
  const [colN, setColN] = useState([]);
  const [colG, setColG] = useState([]);
  const [colO, setColO] = useState([]);
  const [hideBtn, setHideBtn] = useState(false);

  // =========== 作成した数字を出力する関数 ============
  const makeBingoCard = () => {
    for (let i = 0; i < 25; i++) {
      // iが5未満なら
      if (i < 5) {
        // col_Bに、そのi=インデックス番号の数字を格納
        col_B.push(cardNumArray[i]);
        // 10未満なら
      } else if (i < 10) {
        col_I.push(cardNumArray[i]);
      } else if (i < 15) {
        col_N.push(cardNumArray[i]);
      } else if (i < 20) {
        col_G.push(cardNumArray[i]);
      } else if (i < 25) {
        col_O.push(cardNumArray[i]);
      }
    }

    // 中央はfree
    // インデックス2番目から1つ削除して、「free」に置換
    col_N.splice(2, 1, "free");

    setColB(col_B);
    setColI(col_I);
    setColN(col_N);
    setColG(col_G);
    setColO(col_O);

    // 横列の数字を、用意した配列に格納
    for (let i = 0; i < 25; i += 5) {
      for (let j = 0; j < 5; j++) {
        if (j === 0) {
          row_1.push(cardNumArray[i]);
        } else if (j === 1) {
          row_2.push(cardNumArray[i + j]);
        } else if (j === 2) {
          row_3.push(cardNumArray[i + j]);
        } else if (j === 3) {
          row_4.push(cardNumArray[i + j]);
        } else if (j === 4) {
          row_5.push(cardNumArray[i + j]);
        }
      }
    }

    // 斜め列の数字を、用意した配列に格納
    for (let i = 0; i <= 24; i += 6) {
      cross_1.push(cardNumArray[i]);
    }
    for (let i = 4; i <= 20; i += 4) {
      cross_2.push(cardNumArray[i]);
    }
  };

  return (
    <>
      <div className="cardNum-container">
        <CardNum cardNum={colB} />
        <CardNum cardNum={colI} />
        <CardNum cardNum={colN} />
        <CardNum cardNum={colG} />
        <CardNum cardNum={colO} />
      </div>

      <button
        style={hideBtn ? { display: "none" } : null}
        className="makeCard-btn"
        onClick={() => {
          makeBingoCard();
          setHideBtn(!hideBtn);
          data.setShowBingoBallBtn(!data.showBingoBallBtn);
        }}
      >
        カード作成
      </button>
    </>
  );
};

export default MakeBingoCard;
