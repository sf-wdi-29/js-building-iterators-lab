

function myEvery(arr, callback) {
	var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (!callback(arr[i], result, i, arr)) {
          return false;
        }
    } 
    return true;
}


module.exports = myEvery;