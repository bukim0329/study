const getPermutations = function (arr) {
    const res = [];
    if (arr.length === 1)
        return [arr];

    arr.forEach((fixed, ind, arr) => {
      const rest = [...arr.slice(0, ind), ...arr.slice(ind + 1)] 
      const permutations = getPermutations(rest); 
      const attached = permutations.map((el) => [fixed, ...el]); 
      res.push(...attached); 
    });
    return res;
}