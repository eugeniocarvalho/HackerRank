function divisibleSumPairs(n, k, ar) {
  let count = 0

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if ((i < j) && ((ar[i] + ar[j]) % k === 0))
        count++
    }
  }

  return count
}

let ar = [1, 3, 2, 6, 1, 2],
  k = 3,
  n = 6
console.log(divisibleSumPairs(n, k, ar))