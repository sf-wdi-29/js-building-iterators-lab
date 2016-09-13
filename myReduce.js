// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback) {

function reduceIt = function(arr, arr[i], i, init) {
	var result = arr[0]
	if !init {
		for (i = 1; i < arr.length; i ++) {
			result = callback(result, arr[i], i, arr);
		}
	}
	else {
		result = init
		for (i = 0; i < arr.length; i++) {
			var result = callback(result, arr[i], i, arr);
		}
		return result
	}
}







// export this function (you can ignore this for now)
module.exports = myReduce;
