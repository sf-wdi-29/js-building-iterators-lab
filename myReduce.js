// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback) {
	//  CODE INSIDE HERE   //
	var prev = arr[0];
	var length = arr.length;
	var i;

	for (i = 1; i < length; i++) {
		prev = callback(prev, arr[i], i, arr);
	}

	return prev;
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
