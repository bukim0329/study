/**
 * @param {number[]} arr
 * @return {number[][]}
 */
 var minimumAbsDifference = function(arr) {
    const ans = Array();
    let min = Infinity;
    arr.sort((a, b)=>a - b).forEach((val, ind, arr)=>{
        if (arr[ind + 1] - val < min) {
            ans.length = 0;
            min = arr[ind + 1] - val;
            ans.push([val, arr[ind + 1]])
        }
        else if (arr[ind + 1] - val === min)
            ans.push([val, arr[ind + 1]]);
    });
    return ans;
};