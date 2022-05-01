import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [matchedNum_B, setMatchedNum_B] = useState([]);
  const [matchedNum_I, setMatchedNum_I] = useState([]);
  const [matchedNum_N, setMatchedNum_N] = useState([]);
  const [matchedNum_G, setMatchedNum_G] = useState([]);
  const [matchedNum_O, setMatchedNum_O] = useState([]);

  // カードの番号の配列
  const [cardNumbersArray, setCardNumbersArray] = useState([]);

  //ボールボタンの表示非表示
  const [showBingoBallBtn, setShowBingoBallBtn] = useState(false);

  // ボールの数字がカード上に合った場合
  const [matchedNumber, setMatchedNumber] = useState([]);

  return (
    <DataContext.Provider
      value={{
        matchedNum_B,
        setMatchedNum_B,
        matchedNum_I,
        setMatchedNum_I,
        matchedNum_N,
        setMatchedNum_N,
        matchedNum_G,
        setMatchedNum_G,
        matchedNum_O,
        setMatchedNum_O,
        cardNumbersArray,
        setCardNumbersArray,
        showBingoBallBtn,
        setShowBingoBallBtn,
        matchedNumber,
        setMatchedNumber,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
