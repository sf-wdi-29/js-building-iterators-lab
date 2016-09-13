// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback, initialValue) {
	if(!initialValue){
		var output=arr[0];
		if(arr.length>1){
			for(var i=1;i<arr.length;i++) {
				output=callback(output,arr[i],i,arr);
			}
		}
		else {
			return arr[0];	
		}
	}
	else {
		var output=initialValue;
		if(arr.length>1){
			for(var i=0;i<arr.length;i++) {
				output=callback(output,arr[i],i,arr);
			}
		}
		else {
			return initialValue;	
		}
	}
	return output;
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
