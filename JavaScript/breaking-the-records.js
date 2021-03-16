function breakingRecords(scores) {
  let max = min = scores[0], maxCount = minCount = 0

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > max) {
      max = scores[i]
      maxCount++
    }

    if (scores[i] < min) {
      min = scores[i]
      minCount++
    }
  }

  return [maxCount, minCount]
}


let scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42]
console.log(breakingRecords(scores))