
function myFilter(arr, callback) {
	var result = [];
    for (var i = 0; i < arr.length; i++) {
        var value = arr[i];
        if (callback(arr[i], value, i, arr)) {
          result.push(value);
        }
    }
   return result;   
}


	     
module.exports = myFilter;