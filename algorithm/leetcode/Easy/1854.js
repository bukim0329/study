/**
 * @param {number[][]} logs
 * @return {number}
 */
 var maximumPopulation = function(logs) {
    const hash = Object();
    logs.forEach(log=>{
        for (let i = log[0]; i < log[1]; i += 1) {
            hash[i] ? hash[i] += 1 : hash[i] = 1;
        }
    });
    return Object.entries(hash).sort((a, b)=>b[1] - a[1])[0][0];
};