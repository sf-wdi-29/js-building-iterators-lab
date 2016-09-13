var myEach = require('./myEach');
var myMap = require('./myMap');
var myReduce = require('./myReduce');
/* *********************************************************************
  You can edit this file
  It will make use of your code in myEach.js, myMap.js and myReduce.js
  To run it on the console do: `node index.js`
***********************************************************************/

//var numArray = [0,1,10,100,1000];


/* myEach */

//
// myEach(numArray, function print(element, index, arr) {
//   console.log('inside myEach', element, index, arr);
// });

// function myEach(arr,callback){
//   for(var i=0;i<arr.length;i++){
//      callback(arr[i],i,arr);
//    }
// }
//
// myEach(numArray,function (value){
//    console.log(value);
// });



////////////////////////////////////////////////////////////////////////////////////////////////////
//arr.map(callback);

//
// function myMap(arr,callback){
//   var result=[];
//   for(var i=0;i<arr.length;i++){
//     result.push(callback(arr[i],i,arr));
//   }
//   return result;
// }


var input = ["a","b","c"];
var output = myMap(input, function capitalize(v){
    return v.toUpperCase();
});
console.log( output);
// console.log(output === ["A", "B", "C"]) // assertion


//console.log("the end");
