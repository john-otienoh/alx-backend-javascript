function getStudentIdsSum(students) {
  return students.reduce((student, next) => student.id + next, 0);
}
