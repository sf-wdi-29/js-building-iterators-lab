// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback, initialValue) {

  //  CODE INSIDE HERE   //
  var previousValue = arr[0];
  var currentValue = arr[1];
  var currentIndex = 1
  var total = 0;


  for(var i = 0; i < arr.length; i++){
    callback(previousValue, currentIndex, currentValue, arr)
    total = previousValue + currentValue;
    previousValue = arr[currentIndex + 1]
    currentValue = arr[currentIndex + 2]
    currentIndex += 1
  }
  return total;
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
