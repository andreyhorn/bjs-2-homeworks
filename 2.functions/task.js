function getArrayParams(...arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const avg = +(summElementsWorker(...arr) / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  const initialValue = 0;
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue
  );
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return max - min;
}

function evenOdd(...arr) {
  let sumEven = 0;
  let counterEven = 0;
  let sumOdd = 0;
  let counterOdd = 0;
  for( let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0 ) {
      sumEven += arr[i];
      counterEven ++;
    }
    else {
      sumOdd += arr[i];
      counterOdd ++;
    }
  }
  return {sumEven, counterEven, sumOdd, counterOdd};
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = evenOdd(...arr).sumEven;
  let sumOddElement = evenOdd(...arr).sumOdd;

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = evenOdd(...arr).sumEven;
  let countEvenElement = evenOdd(...arr).counterEven;

  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = arrOfArr[0][0];
  for (let i = 0; i < arrOfArr.length; i++) {
    let currentResult = func(...arrOfArr[i])
    if (maxWorkerResult < currentResult) {
      maxWorkerResult = currentResult;
    }
  }
  return maxWorkerResult;
}