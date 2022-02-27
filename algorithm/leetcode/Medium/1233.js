/**
 * @param {string[]} folder
 * @return {string[]}
 */
const removeSubfolders = function (folder) {
  const ret = [];
  folder.sort();
  folder.forEach(dir => {
    if (!ret.some(val => dir.startsWith(val) && dir[val.length] === '/')) {
      ret.push(dir);
    }
  });

  return ret;
};
