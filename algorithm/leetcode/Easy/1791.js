/**
 * @param {number[][]} edges
 * @return {number}
 */
 var findCenter = function(edges) {
    const [cand1, cand2] = edges[0];
    return edges[1].includes(cand1) ? cand1 : cand2;
};