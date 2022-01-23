/**
 * @param {string} time
 * @return {string}
 */
const maximumTime = function (time) {
  const clock = time.split('');
  if (time[0] === '?') clock[0] = time[1] > 3 ? '1' : '2';
  if (time[1] === '?') clock[1] = clock[0] > 1 ? '3' : '9';
  if (time[3] === '?') clock[3] = '5';
  if (time[4] === '?') clock[4] = '9';

  return clock.join('');
};
