function myFilter(arr, callback) {

//  CODE INSIDE HERE   //
	var newArray = [];
	for(i = 0; i < arr.length; i++ ){
		if(callback(arr[i])){
			newArray.push(arr[i]);
		}
	}

	return newArray;
}