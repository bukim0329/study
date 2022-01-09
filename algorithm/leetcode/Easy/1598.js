/**
 * @param {string[]} logs
 * @return {number}
 */
 var minOperations = function(logs) {
    return logs.reduce((ans, cur)=>{
        if (cur === "./")
            return ans;
        else if (cur === "../")
            return ans === 0 ? ans : ans - 1;
        else
            return ans + 1;
    }, 0)
};