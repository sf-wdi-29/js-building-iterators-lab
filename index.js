var myEach = require('./myEach');
var myMap = require('./myEach');
var myReduce = require('./myEach');
/* *********************************************************************
  You can edit this file
  It will make use of your code in myEach.js, myMap.js and myReduce.js
  To run it on the console do: `node index.js`
***********************************************************************/

/* myEach */

var numArray = [0,1,10,100,1000];

function myEach(array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

//
myEach(numArray, function print(element, index, arr) {
  console.log('inside myEach', element, index, arr);
});


/* myMap */

function myMap(arr, callback) {
  var mappedArray = [];
  for (var i = 0; i < arr.length; i++) {
    mappedArray.push(callback(arr[i], i, arr));
  }
  return mappedArray;
}



var input = ["a","b","c"];
var output = myMap(input, function capitalize(v){
    return v.toUpperCase();
});
console.log('Testing myMap')
console.log(output === ["A", "B", "C"]) // assertion


console.log("the end");
