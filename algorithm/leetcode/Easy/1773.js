/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
 var countMatches = function(items, ruleKey, ruleValue) {
    const key = {
        'type' : 0,
        'color' : 1,
        'name' : 2,
    };
    return items.reduce((ans, cur)=>cur[key[ruleKey]] === ruleValue ? ans + 1 : ans, 0);
};