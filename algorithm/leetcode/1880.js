/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
 var isSumEqual = function(firstWord, secondWord, targetWord) {
    firstNum = Number(firstWord.split('').reduce((acc, cur)=>acc + String(cur.charCodeAt(0) - 'a'.charCodeAt(0)), ""));
    secondNum = Number(secondWord.split('').reduce((acc, cur)=>acc + String(cur.charCodeAt(0) - 'a'.charCodeAt(0)), ""));
    targetNum = Number(targetWord.split('').reduce((acc, cur)=>acc + String(cur.charCodeAt(0) - 'a'.charCodeAt(0)), ""));
    return firstNum + secondNum === targetNum;
};