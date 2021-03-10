function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let numApples = numOranges = 0

  for (i of apples){
    i += a

    if (i >= s && i <= t)
      numApples++
  }

  for (j of oranges) {
    j += b

    if (j >= s && j <= t)
      numOranges++
  }

  console.log(numApples)
  console.log(numOranges)
}

let apples = [2, 3, -4],
  oranges = [3, -2, -4]

console.log(countApplesAndOranges(7, 10, 4, 12, apples, oranges))