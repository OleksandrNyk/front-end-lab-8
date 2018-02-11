var a = parseFloat(prompt("First side", "0"));
var b = parseFloat(prompt("Second side", "0"));
var c = parseFloat(prompt("Third side", "0"));
var p = (a + b + c) / 2;
var sHeron = Math.sqrt(p * (p - a) * (p - b) * (p - c)); 
var fixedS = sHeron.toFixed(2);

function triangleType(a, b, c) {
	switch(true) {
		case a === b && b === c:
			return 'Equilateral';

		case Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) || Math.pow(b, 2) + Math.pow(c, 2) === Math.pow(a, 2) || Math.pow(a, 2) + Math.pow(c, 2) === Math.pow(b, 2):
			return 'Right triangle';

		case a === b && b != c || a === c && c != b || b === c && c != a:
			return 'Isosceles';
										
		case a != b && b != c:
			return 'Scalene';

			   }
}

var output = (a <= 0 || b <= 0 || c <= 0 || isNaN(parseFloat(fixedS)) || fixedS <=0 ) ? "Incorrect data" : 
	("Type of triangle " + triangleType(a, b, c) + " and square is " +  fixedS);


console.log(output);