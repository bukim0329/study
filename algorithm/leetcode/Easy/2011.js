/**
 * @param {string[]} operations
 * @return {number}
 */
 var finalValueAfterOperations = function(operations) {
    let ans = 0;
    operations.forEach(val=>{
        val.includes('+') ? ans++ : ans--;
    });
    return ans;
};