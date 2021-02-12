let candles = [3, 2, 1, 3]

function birthdayCakeCandles(candles) {
  let biggerCandle = Math.max(...candles);
  let quantCandles = 0
  
  for (let i of candles) {
    if (i === biggerCandle)
      quantCandles++
  }

  return quantCandles
}

console.log(birthdayCakeCandles(candles))