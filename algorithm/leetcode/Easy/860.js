/**
 * @param {number[]} bills
 * @return {boolean}
 */
const lemonadeChange = function (bills) {
  let five = 0;
  let ten = 0;
  for (let i = 0; i < bills.length; i += 1) {
    switch (bills[i]) {
      case 5:
        five += 1;
        break;
      case 10:
        if (five === 0) {
          return false;
        }
        ten += 1;
        five -= 1;

        break;
      case 20:
        if (five === 0 || (five < 3 && ten === 0)) {
          return false;
        }
        if (ten === 0) {
          five -= 3;
        } else {
          ten -= 1;
          five -= 1;
        }

        break;
      default:
        break;
    }
  }

  return true;
};
