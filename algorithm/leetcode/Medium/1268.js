/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
const suggestedProducts = function (products, searchWord) {
  const ans = [];
  products.sort();
  for (let i = 0; i < searchWord.length; i += 1) {
    const tmp = [];
    const str = searchWord.slice(0, i + 1);
    for (let j = 0; j < products.length; j += 1) {
      if (products[j].startsWith(str)) {
        tmp.push(products[j]);
      }
      if (tmp.length === 3) {
        break;
      }
    }
    ans.push(tmp);
  }
  return ans;
};
