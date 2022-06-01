/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = (numCourses, prerequisites) => {
  const map = new Map();
  for (let i = 0; i < numCourses; i += 1) {
    map.set(i, 0);
  }
  prerequisites.forEach(([course]) => {
    map.set(course, map.get(course) + 1);
  });
  while ([...map.values()].filter(v => v === 0).length > 0) {
    [...map.keys()].forEach(val => {
      if (map.get(val) === 0) {
        map.delete(val);
        prerequisites.forEach(([course, prereq]) => {
          if (prereq === val) {
            map.set(course, map.get(course) - 1);
          }
        });
      }
    });
  }

  return map.size === 0;
};
