function kangaroo(x1, v1, x2, v2) {
  for (let i = 0; i < 10000; i++) {
    if (x1 + v1 === x2 + v2) {
      return 'YES'
    }
    else {
      x1 += v1
      x2 += v2
    }
  }

  return 'NO'
}

console.log(kangaroo(0, 3, 4, 2))