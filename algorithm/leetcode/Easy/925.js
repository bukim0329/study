/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
const isLongPressedName = function (name, typed) {
  let ind1 = 0;
  let ind2 = 0;
  while (ind1 < name.length || ind2 < typed.length) {
    if (name[ind1] === typed[ind2]) {
      ind1 += 1;
    } else if (name[ind1 - 1] !== typed[ind2]) {
      return false;
    }
    ind2 += 1;
  }
  return true;
};
