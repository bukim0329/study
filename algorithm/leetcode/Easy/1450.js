/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
 var busyStudent = function(startTime, endTime, queryTime) {
    return startTime.reduce((acc, cur, ind)=>{
        return cur <= queryTime && endTime[ind] >= queryTime ? acc + 1 : acc;
    }, 0);
};