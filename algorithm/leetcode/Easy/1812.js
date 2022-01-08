/**
 * @param {string} coordinates
 * @return {boolean}
 */
 var squareIsWhite = function(coordinates) {
    const col = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    const cor = coordinates.split('');
    return (col.indexOf(cor[0]) + Number(cor[1])) % 2 === 0 ? true : false;
};