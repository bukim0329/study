/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = (numCourses, prerequisites) => {
  const map = new Map();
  prerequisites.forEach(([course]) => {
    map.set(course, (map.get(course) || 0) + 1);
  });

  const queue = [];
  for (let i = 0; i < numCourses; i += 1) {
    if (!map.get(i)) queue.push(i);
  }

  const res = [];
  while (queue.length) {
    const tmp = queue.shift();
    numCourses -= 1;
    res.push(tmp);
    prerequisites.forEach(([course, prerequesite]) => {
      if (prerequesite === tmp) {
        map.set(course, map.get(course) - 1);
        if (map.get(course) === 0) queue.push(course);
      }
    });
  }
  return numCourses === 0 ? res : [];
};
