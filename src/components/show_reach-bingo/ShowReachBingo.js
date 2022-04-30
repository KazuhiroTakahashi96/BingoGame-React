import React from "react";

const ShowReachBingo = () => {
  const reachBingoNumStyle = {
    fontSize: "40px",
    fontWeight: "bold",
  };

  return (
    <div>
      <div>リーチ数</div>
      <div style={reachBingoNumStyle}>0</div>
      <br />
      <br />
      <div>ビンゴ数</div>
      <div style={reachBingoNumStyle}>0</div>
    </div>
  );
};

export default ShowReachBingo;
