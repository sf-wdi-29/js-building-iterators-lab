// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map

Array.prototype.myMap = function(callback, thisArg = this) {
        returnArray = [];
        for (var i = 0; i < thisArg.length; i++) {
            returnArray.push(callback(thisArg[i], i, thisArg));
        }
        return returnArray;
    }
/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = Array.prototype.myMap;
