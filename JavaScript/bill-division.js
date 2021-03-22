function bonAppetit(bill, k, b) {
  let annaBill = 0

  for (let i in bill) {
    if (k != i) {
      annaBill += bill[i]
    }
  }

  annaBill /= 2

  if (b === annaBill)
    console.log('Bon Appetit')
  else {
    console.log(b - annaBill)
  }
}

bonAppetit([3, 10, 2, 9], 1, 12)