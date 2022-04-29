import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [colB, setColB] = useState([]);
  const [colI, setColI] = useState([]);
  const [colN, setColN] = useState([]);
  const [colG, setColG] = useState([]);
  const [colO, setColO] = useState([]);

  return (
    <DataContext.Provider
      value={{
        colB,
        setColB,
        colI,
        setColI,
        colN,
        setColN,
        colG,
        setColG,
        colO,
        setColO,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
