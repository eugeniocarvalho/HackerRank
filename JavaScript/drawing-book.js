function pageCount(n, p) {
  let resultRight = 0,
    resultLeft = 0

  for (let i = 1; i <= n; i += 2) {
    if (i === 1 && i !== p) {
      resultRight++
      i++
    }

    if ((i != p) && (i + 1 != p)) {
      resultRight++
    } else
      break
  }

  for (let j = n; j >= 1; j -= 2) {
    if (n % 2 === 0) {
      if ((j != p) && (j + 1 != p)) {
        resultLeft++
      } else
        break
    } else {
      if (j === 1 && j != p) {
        resultLeft++
        j--
      }

      if ((j != p) && (j - 1 != p)) {
        resultLeft++
      } else
        break
    }
  }

  return Math.min(resultRight, resultLeft)
}

console.log(pageCount(6, 4))