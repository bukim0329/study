/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
const countStudents = function (students, sandwiches) {
  const map = new Map();
  students.forEach(val => map.set(val, (map.get(val) || 0) + 1));
  for (let i = 0; i < sandwiches.length; i += 1) {
    if (map.get(sandwiches[i]) > 0) {
      map.set(sandwiches[i], map.get(sandwiches[i]) - 1);
    } else {
      return sandwiches.length - i;
    }
  }

  return 0;
};
