grades = [84, 29, 57, 36, 42, 47]

function gradingStudents(grades) {
  for (let i in grades) {

    if (grades[i] >= 38) {
      let difference = Math.ceil(grades[i] / 5) * 5
      if (difference - grades[i] < 3)
        grades[i] = difference
    }
  }

  return grades
}

console.log(gradingStudents(grades))