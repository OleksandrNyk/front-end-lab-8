var num = parseInt(prompt("Please enter number between 1 and 20", " "));

var unit = "[~]";

if ( num < 1 || num > 20 || isNaN(parseInt(num))) {
	console.error('Incorrect!');
} else {
	
	 var tier = "";
         for (var i = 1; i <= num; i++) {
         for (var j = 1; j <= i; j++) {
         tier += unit;
         }
         tier += "\n";
         }
         console.log(tier);		
}
