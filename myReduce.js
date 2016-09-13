// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback, initialValue) {

//  CODE INSIDE HERE   //
	var result;
	if(!initialValue){
		result = arr[0];
	}
	else{
		result = initialValue; 
	}

	for(i = 1 - (initialValue ? 1: 0) ; i < arr.length ; i++){
		result = callback(result, arr[i], i, arr);
	}

	return result;
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
