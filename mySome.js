Array.prototype.mySome = function(callback, thisArg = this) {
    for (var i = 0; i < thisArg.length; i++) {
        if (callback(thisArg[i], i, thisArg)) {
            return true;
        }
    }
    return false;
}


module.exports = Array.prototype.mySome;
