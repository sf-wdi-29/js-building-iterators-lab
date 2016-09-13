// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback,initialValue) {
	var Result;
    var i=0;

if(initialValue != undefined){
	Result=initialValue

} 
else{
	Result=arr[0];
	i++;
}


if(arr.length >0){ 
for(; i<arr.length; i++){
	Result=callback(Result,arr[i],i,arr);
}
return Result;
}
//  CODE INSIDE HERE   //
 return Result;

}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
