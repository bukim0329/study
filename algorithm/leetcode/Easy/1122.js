/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
 var relativeSortArray = function(arr1, arr2) {
    const obj = Object();
    const ans = Array();
    arr1.forEach(val=>{
        obj[val] ? obj[val]++ : obj[val] = 1
    });
    arr2.forEach(val=>{
        ans.push(...Array.from(Array(obj[val]), ()=>val));
        delete obj[val];
    });
    const rest = Object.entries(obj);
    rest.sort((a, b)=>a[0] - b[0]).forEach(val=>{
        ans.push(...Array.from(Array(val[1]), ()=>val[0]));
    });
    return ans;
};