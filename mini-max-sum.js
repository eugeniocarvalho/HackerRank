arr = [1, 2, 3, 4, 5]

function miniMaxSum(arr) {
  let arr2 = []

  for (let i in arr) {
    cont = 0

    for (let j in arr)
      if (j !== i)
        cont += arr[j]

    arr2.push(cont)
  }

  console.log(Math.min(...arr2), Math.max(...arr2))
}

miniMaxSum(arr)