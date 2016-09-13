var myEach = require('./myEach');
var myMap = require('./myMap');
var myReduce = require('./myReduce');
/* *********************************************************************
  You can edit this file
  It will make use of your code in myEach.js, myMap.js and myReduce.js
  To run it on the console do: `node index.js`
***********************************************************************/

var numArray = [0,1,10,100,1000];


// function myEach(callback, i, array) {
// 	for(var i = 0; i < array.length; i++) {
// 		callback(array[i]);
// 	}
// };


/* myEach */

//
// myEach(numArray, function print(element, index, arr) {
//   console.log('inside myEach', element, index, arr);
// });


var singleNumArray = [50,60,70,80];
var doubleNumArray = myMap(arrIndex, function(num, numIndex, originalArry) {
	return num * 2;
});


/* myMap */

// var input = ["a","b","c"];
// var output = myMap(input, function capitalize(v){
//     return v.toUpperCase();
// });
// console.log('Testing myMap')
// console.log(output === ["A", "B", "C"]) // assertion


console.log("the end");
