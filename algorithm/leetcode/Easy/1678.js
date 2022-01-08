/**
 * @param {string} command
 * @return {string}
 */
 var interpret = function(command) {
    /*return command
        .replace(/\(\)/g, 'o')
        .replace(/\(al\)/g, 'al');
        */
    return command
    .split('()').join('o')
    .split('(al)').join('al');
};