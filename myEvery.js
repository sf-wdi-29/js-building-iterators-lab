function myEvery(arr, callback) {

//  CODE INSIDE HERE   //
	for(i = 0; i < arr.length; i++ ){
		if(!callback(arr[i],i,arr)){
			return false;
		}
	}
	return true;
}