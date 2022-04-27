/**
 * @param {number[]} encoded
 * @return {number[]}
 */
const decode = function (encoded) {
  const n = encoded.length + 1;
  const perm = Array(n).fill(0);
  for (let i = 1; i <= n; i++) {
    perm[0] ^= i;
  }
  for (let i = 1; i < n - 1; i += 2) {
    perm[0] ^= encoded[i];
  }
  for (let i = 1; i < n; i++) {
    perm[i] = perm[i - 1] ^ encoded[i - 1];
  }
  return perm;
};
