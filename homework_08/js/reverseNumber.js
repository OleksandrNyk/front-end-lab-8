 let reverseNumber = function(integer){
	 let sign = Math.sign(integer);
	 let rev = parseFloat(String(integer).split('').reverse().join(''));
	 return sign * rev;
 }
 
 /*console.log(reverseNumber(-11134568309.67676));*/

