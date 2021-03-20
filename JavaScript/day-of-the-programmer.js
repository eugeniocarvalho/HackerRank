function dayOfProgrammer(year) {
  if (year == 1918)
    return '26.09.1918'

  if (((year <= 1917) && year % 4 === 0) || (year % 400 === 0) || (year % 4 === 0) && (year % 100 !== 0))
    return `12.09.${year}`;

  return `13.09.${year}`;
}

aa = dayOfProgrammer(1915)
console.log(aa)