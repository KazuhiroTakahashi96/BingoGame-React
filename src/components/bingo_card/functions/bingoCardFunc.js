// ビンゴカードの番号を格納する配列
const cardNumArray = [];

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

const makeBingoCard = () => {
  // =========== ビンゴカードの数字を作成する関数 ===========
  const makeRandomNum = (plus) => {
    // 1〜15の数字が入った、長さ75の配列を作成
    const baseNum = [];
    for (let i = 1; i <= 15; i++) {
      baseNum.push(i);
    }

    for (let i = 0; i < 5; i++) {
      // ランダムな値を取得
      const randomNum = Math.floor(Math.random() * baseNum.length);
      cardNumArray.push(baseNum[randomNum] + plus);
      // 数字が重複しないよう、元の配列から削除
      baseNum.splice(randomNum, 1);
    }
  };

  // =========== 上で作成した数字を出力する関数 ============
  // カードの各列に入るランダムな数字を作る
  makeRandomNum(0);
  makeRandomNum(15);
  makeRandomNum(30);
  makeRandomNum(45);
  makeRandomNum(60);

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

  console.log(row_1);
  console.log(row_2);
  console.log(row_3);
  console.log(row_4);
  console.log(row_5);
  console.log(cross_1);
  console.log(cross_2);
  //   setColB(col_B);
  //   setColI(col_I);
  //   setColN(col_N);
  //   setColG(col_G);
  //   setColO(col_O);
};

export default makeBingoCard;
