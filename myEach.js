// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ForEach

Array.prototype.myEach = function(callback, thisArg = this) {
        for (var i = 0; i < thisArg.length; i++) {
            callback(thisArg[i], i, thisArg);
        }
    }
/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = Array.prototype.myEach;
