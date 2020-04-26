function square(Number){
    return Number * Number;
  }
  function sumOfSquares(NumberOne,NumberTwo){
    return square(NumberOne) + square(NumberTwo);
  }
  function squareSumOfSquares(NumberOne,NumberTwo){
    return square(sumOfSquares(NumberOne,NumberTwo));
  }
/*
  console.log(square(5));
  console.log(square(10));
  console.log(sumOfSquares(5, 10));
  console.log(sumOfSquares(10, -9));
  console.log(squareSumOfSquares(1, 1));
  console.log(squareSumOfSquares(2, 3));

  */
 const isRightNum = (num) => {
    const res = (num > 3) && (num ** 2 < 26) && (num !== 5);
    return res;
  };
//console.log(isRightNum(4));  
console.log(4 ** 2);