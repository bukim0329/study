/**
 * @param {string[][]} paths
 * @return {string}
 */
 var destCity = function(paths) {
    const arr1 = Array();
    const arr2 = Array();
    paths.forEach(val=>{
        arr1[arr1.length] = val[0];
        arr2[arr2.length] = val[1];
    });
    for (let i = 0; i < arr2.length; i++) {
        if (!arr1.includes(arr2[i]))
            return arr2[i];
    }
};