//'this' will reference the array
//

Array.prototype.myEach = function(callback, thisArg = this) {
        for (var i = 0; i < thisArg.length; i++) {
            callback(thisArg[i], i, thisArg);
        }
    }
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

Array.prototype.myMap = function(callback, thisArg = this) {
        returnArray = [];
        for (var i = 0; i < thisArg.length; i++) {
            returnArray.push(callback(thisArg[i], i, thisArg));
        }
        return returnArray;
    }
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

Array.prototype.myReduce = function(callback, returnValue = this[0]) {

        for (var i = arguments.length > 1 ? 0 : 1; i < this.length; i++) {
            returnValue = callback(returnValue, this[i], i, this);
        }
        return returnValue;
    }
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

Array.prototype.myFilter = function(callback, thisArg = this) {
        returnArray = [];
        for (var i = 0; i < thisArg.length; i++) {
            if (callback(thisArg[i], i, thisArg)) {
                returnArray.push(thisArg[i]);
            }
        }
        return returnArray;
    }
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

Array.prototype.mySome = function(callback, thisArg = this) {
    for (var i = 0; i < thisArg.length; i++) {
        if (callback(thisArg[i], i, thisArg)) {
            return true;
        }
    }
    return false;
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

Array.prototype.myEvery = function(callback, thisArg = this) {
    for (var i = 0; i < thisArg.length; i++) {
        if (!callback(thisArg[i], i, thisArg)) {
            return false;
        }
    }
    return true;
}
}
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
