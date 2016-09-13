

function mySome(arr, callback) {
	var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i], result, i, arr)) {
          return true;
        }
    } 
    return false;
}


module.exports = mySome;