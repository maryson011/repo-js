function gradingStudents(grades) {
  // Write your code here
  const novaGrade = grades.map((r) => {
    let arredondado = Math.round(r / 5) * 5;
    let diferenca = arredondado - r;
    console.log(diferenca);
    if (r + diferenca < 40) {
      return r;
    } else if (diferenca < 0) {
      return r;
    } else if (diferenca < 3) {
      return r + diferenca;
    }
  });
  console.log(novaGrade);
}

const grade = [73, 67, 38, 33];
gradingStudents(grade);
