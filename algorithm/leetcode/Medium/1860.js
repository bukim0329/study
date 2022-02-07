/**
 * @param {number} memory1
 * @param {number} memory2
 * @return {number[]}
 */
const memLeak = function (memory1, memory2) {
  let mem = 1;

  while (mem <= memory1 || mem <= memory2) {
    memory1 < memory2 ? (memory2 -= mem) : (memory1 -= mem);
    mem += 1;
  }
  return [mem, memory1, memory2];
};
