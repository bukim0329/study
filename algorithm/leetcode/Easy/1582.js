/**
 * @param {number[][]} mat
 * @return {number}
 */
 var numSpecial = function(mat) {
    const row = Array();
    const obj = Object();
    mat.forEach((line, ind)=>{
        if ((line.join('').match(/[1]/g) || []).length === 1)
            row.push(ind);
        line.forEach((val, i)=>{
            if (val === 1)
                obj[i] ? obj[i] += 1 : obj[i] = 1;
        });
    });
    console.log(row, obj);
    return row.reduce((acc, cur)=>obj[mat[cur].indexOf(1)] === 1 ? acc += 1 : acc, 0);
};