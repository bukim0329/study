/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicates = function(s) {
    const stack = Array();
    Array
        .from(s)
        .forEach(val=>{
            stack[stack.length - 1] === val ? stack.pop() : stack.push(val);
        });
    return stack.join('');
};