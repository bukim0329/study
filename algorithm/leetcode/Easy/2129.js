/**
 * @param {string} title
 * @return {string}
 */
const capitalizeTitle = function (title) {
  return title
    .split(' ')
    .map(str => (str.length > 2 ? str[0].toUpperCase() + str.slice(1).toLowerCase() : str.toLowerCase()))
    .join(' ');
};
