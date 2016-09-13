var myEach = require('./myEach');
var myMap = require('./myMap');
var myReduce = require('./myReduce');
var myFilter = require('./myFilter');
var mySome = require('./mySome');
var myEvery = require('./myEvery');

/* *********************************************************************
  You can edit this file
  It will make use of your code in myEach.js, myMap.js and myReduce.js
  To run it on the console do: `node index.js`
***********************************************************************/

var numArray = [0,1,10,100,1000];


/* myEach */


console.log('Testing myEach, output: ');
//
myEach(numArray, function print(element) {
  // console.log('inside myEach', element, index, arr);
  console.log(element);	
});


/* myMap */

var input = ["a","b","c"];
var output = myMap(input, function capitalize(v){
    return v.toUpperCase();
});
console.log('Testing myMap, output: ',output);
console.log(output === ["A", "B", "C"]) // assertion


/* myReduce */

var reduceInput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var stringInput = ["hi","hello","boo"];
var reduceOutput = myReduce(stringInput, function add(previous, current) {
  return previous + current;
});
console.log('Testing myReduce, output: ',reduceOutput);

/* myFilter */

var fruits = ["Apple", "Banana", "Cherry", "Durian", "Elderberry",
"Fig", "Guava", "Huckleberry", "Ice plant", "Jackfruit"];

var vowels = ["A", "E", "I", "O", "U"];
function vowelFruit(fruitCollection) {
  var result = vowels.indexOf(fruitCollection[0]) >= 0; // indexOf returns -1 if not found
  //console.log("result for " + fruitCollection + " is " + result);
  return result;
}

var vowelFruits = myFilter(fruits,vowelFruit);
console.log("vowelFruits: ",vowelFruits);
//=> ["Apple", "Elderberry", "Ice plant"]


/* mySome */

function isBiggerThan10(element, index, array) {
  return element > 10;
}

console.log('Testing mySome:');
console.log("False: ",mySome([2, 5, 8, 1, 4],isBiggerThan10));  // false
console.log("True: ",mySome([12, 5, 8, 1, 4],isBiggerThan10)); // true
console.log("False: ",mySome([4],isBiggerThan10)); // false
console.log("False: ",mySome([10],isBiggerThan10)); // false
console.log("True: ",mySome([11],isBiggerThan10)); // true

console.log("the end");


/* myEvery */

function isBigEnough(element, index, array) {
  return element >= 10;
}

console.log('Testing myEvery:');
console.log("False: ",myEvery([12, 5, 8, 130, 44],isBigEnough));   // false
console.log("True: ",myEvery([12, 54, 18, 130, 44],isBigEnough)); // true
console.log("False: ",myEvery([5],isBigEnough));   // false
console.log("True: ",myEvery([44],isBigEnough));   // true
