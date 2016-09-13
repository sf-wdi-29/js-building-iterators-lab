// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ForEach

function myEach(arr, callback) {
//  CODE INSIDE HERE   //
var i;
var length = arr.length;

for (i = 0; i < length; i++) {
    callback(arr[i], i, arr);
  }
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myEach;
