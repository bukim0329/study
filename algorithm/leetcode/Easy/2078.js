/**
 * @param {number[]} colors
 * @return {number}
 */
 var maxDistance = function(colors) {
    let max = 0;
    colors.forEach((val, ind)=>{
        colors.slice(ind + 1).forEach((num, i)=>{
            if (val !== num && max < i + 1)
                max = i + 1;
        });
    });
    return max;
};