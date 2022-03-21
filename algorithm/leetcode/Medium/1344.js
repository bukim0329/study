/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
const angleClock = function (hour, minutes) {
  const ang = Math.abs(hour * 30 - minutes * 5.5);
  return Math.min(360 - ang, ang);
};
