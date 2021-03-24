function sockMerchant(n, ar) {
  let count = 0

  ar = ar.sort()
  
  for (let i = 0; i < n; i++) {
    if (ar[i] == ar[i + 1]) {
      i++
      count++
    }
  }

  return count
}

let ar = [4, 5, 5, 5, 6, 6, 4, 1, 4, 4, 3, 6, 6, 3, 6, 1, 4, 5, 5, 5]

console.log(sockMerchant(ar.length, ar))