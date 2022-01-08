/**
 * @param {number} n
 */
 var OrderedStream = function(n) {
    this.ptr = 1;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    const ret = Array();
    this[idKey] = value;
    while (this[this.ptr]) {
        ret.push(this[this.ptr]);
        this.ptr++;
    }
    return ret;
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */