import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // const [colB, setColB] = useState([]);
  // const [colI, setColI] = useState([]);
  // const [colN, setColN] = useState([]);
  // const [colG, setColG] = useState([]);
  // const [colO, setColO] = useState([]);

  // カードの番号の配列
  const [cardNumbersArray, setCardNumbersArray] = useState([]);

  //ボールボタンの表示非表示
  const [showBingoBallBtn, setShowBingoBallBtn] = useState(false);

  // ボールの数字がカード上に合った場合
  const [matchedNumber, setMatchedNumber] = useState([]);

  return (
    <DataContext.Provider
      value={{
        // colB,
        // setColB,
        // colI,
        // setColI,
        // colN,
        // setColN,
        // colG,
        // setColG,
        // colO,
        // setColO,
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
