import React from "react";

const reachBingoNumStyle = {
  fontSize: "30px",
  fontWeight: "bold",
};

const ShowReachBingo = ({ cardNumArray }) => {
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
