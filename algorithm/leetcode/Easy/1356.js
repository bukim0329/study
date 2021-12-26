/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var sortByBits = function(arr) {
    const bitArr = Array.from(Array(arr.length), ()=>Array());
    arr.forEach((val, ind)=>{
        bitArr[ind][0] = val;
        bitArr[ind][1] = Array.from(val.toString(2)).reduce((acc, cur)=>acc + Number(cur), 0);
    });
    bitArr.sort((a, b)=>a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]);
    return bitArr.map(val=>val[0]);
};