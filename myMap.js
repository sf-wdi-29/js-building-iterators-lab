// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Map

function myMap(arr, callback) {

//  CODE INSIDE HERE   //
  var output = [];
  var length = arr.length;
  var i;

  for (i = 0; i < length; i++) {
    output.push(callback(arr[i], i, arr));
  }

  return output;
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myMap;
