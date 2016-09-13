var myEach = require('./myEach');
var myMap = require('./myMap');
var myReduce = require('./myReduce');
/* *********************************************************************
  You can edit this file
  It will make use of your code in myEach.js, myMap.js and myReduce.js
  To run it on the console do: `node index.js`
***********************************************************************/

var numArray = [0,1,10,100,1000];


/* myEach */

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

var vowels = ["A", "E", "I", "O", "U"];
function vowelFruit(fruit) {
  var result = vowels.indexOf(fruit[0]) >= 0; // indexOf returns -1 if not found
  console.log("result for " + fruit + " is " + result);
  return result;
}
var vowelFruits = myFilter(fruits,vowelFruit);
console.log("vowelFruits: ",vowelFruits);
//=> ["Apple", "Elderberry", "Ice plant"]

console.log("the end");
