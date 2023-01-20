function finalGrade (exam, projects) {
  let finalGrade = 0;
  
  if (exam > 90 || projects > 10) {
    finalGrade = finalGrade + 100;
  } else if (exam > 75 && projects >= 5) {
    finalGrade = finalGrade + 90;
  } else if (exam > 50 && projects >= 2) {
    finalGrade = finalGrade + 75;
  } else {
    finalGrade = finalGrade;
  }