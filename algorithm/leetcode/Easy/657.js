/**
 * @param {string} moves
 * @return {boolean}
 */
 var judgeCircle = function(moves) {
    let x = 0, y = 0;
    moves.split('').forEach(val=>{
        switch(val) {
            case 'R': x++;
                break;
            case 'L': x--;
                break;
            case 'U': y++;
                break;
            case 'D': y--;
                break;
            default:
        }
    })
    if (x === 0 && y === 0)
        return true;
    return false;
};