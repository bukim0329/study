/**
 * @param {string} word
 * @return {number}
 */
 var minTimeToType = function(word) {
    let pointer = 'a';
    return word.length + Array
        .from(word)
        .reduce((acc, cur)=>{
            const diff = Math.abs(pointer.charCodeAt(0) - cur.charCodeAt(0));
            pointer = cur;
            return acc + (diff > 13 ? 26 - diff : diff);
        }, 0);
};