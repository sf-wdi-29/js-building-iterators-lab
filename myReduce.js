// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback, init) {

    var now = arr[0];
    if (!init) {
    for (var i = 1; i < arr.length; i++) {
    now = callback(now, arr[i], i, arr);
        }
    }

    else {
        var now = init;
        for (var i = 0; i < arr.length; i++) {
        now = callback(now, arr[i], i, arr);
        }
    }

    return now;
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
