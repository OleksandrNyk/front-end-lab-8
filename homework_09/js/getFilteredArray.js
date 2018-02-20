
function getFilteredArray(arr, predicate){
	let arr2 = [];
	 forEach(arr, function(d) {
		if (predicate(d)) {
			arr2.push(d);
		}
	 });
	return arr2.sort(function(a,b){return a-b});
 } 



function predicateFunction(num) { 
return num > 3;
} 


/*console.log(getFilteredArray([1, -3, 20, 3, 5, 12, 14, 7, 15], predicateFunction));*/
