let getTransformedArray = function(arr, display2) {
	let arr1 = [];
	 forEach(arr, function(d) {
		 arr1.push(display2(d))
	 });  
	return arr1;
 } 

function increment(num) { 
return num + 1;
}

/*console.log(getTransformedArray([-10, 5, -7, 4], increment)); */ 