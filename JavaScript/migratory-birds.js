function migratoryBirds(arr) {
  let birdsCount = [0, 0, 0, 0, 0];

  for (let i of arr) {
    birdsCount[i - 1]++
  }

  console.log(birdsCount)

  return birdsCount.indexOf((Math.max(...birdsCount))) + 1
}

let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]

console.log(migratoryBirds(arr))