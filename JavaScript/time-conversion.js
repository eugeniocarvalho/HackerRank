let time = '12:45:54PM'

function timeConversion(s) {
  time = s.split(':')
  time[2] = s.substring(s.length - 4, s.length - 2)
  timeZone = s.substring(s.length - 2)

  if (timeZone === 'PM') {
    switch (time[0]) {
      case '01':
        time[0] = '13'
        break;
      case '02':
        time[0] = '14'
        break;
      case '03':
        time[0] = '15'
        break;
      case '04':
        time[0] = '16'
        break;
      case '05':
        time[0] = '17'
        break;
      case '06':
        time[0] = '18'
        break;
      case '07':
        time[0] = '19'
        break;
      case '08':
        time[0] = '20'
        break;
      case '09':
        time[0] = '21'
        break;
      case '10':
        time[0] = '22'
        break;

      case '11':
        time[0] = '23'
        break;

      default:
        break;
    }
  } else {
    if (timeZone === 'AM')
      switch (time[0]) {
        case '12':
          time[0] = '00'
          break;

        default:
          break;
      }
  }

  return `${time[0]}:${time[1]}:${time[2]}`
}

console.log(timeConversion(time))