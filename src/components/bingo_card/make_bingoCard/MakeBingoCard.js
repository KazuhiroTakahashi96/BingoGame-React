import { useContext, useState } from "react";
import { DataContext } from "../../../context/DataContext";
import CardNum from "../card_number/CardNum";

// B列、I列、N列、G列、O列の配列（縦列）
const col_B = [];
const col_I = [];
const col_N = [];
const col_G = [];
const col_O = [];

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
  };

  return (
    <>
      <div className="cardNum-container">
        <CardNum cardNum={colB} matchedNumArray={data.matchedNum_B} />
        <CardNum cardNum={colI} matchedNumArray={data.matchedNum_I} />
        <CardNum cardNum={colN} matchedNumArray={data.matchedNum_N} />
        <CardNum cardNum={colG} matchedNumArray={data.matchedNum_G} />
        <CardNum cardNum={colO} matchedNumArray={data.matchedNum_O} />
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
