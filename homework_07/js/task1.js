var num = parseInt(prompt("Please enter number between 1 and 20", " "));

var unit = "[~]";

if ( num < 1 || num > 20 || isNaN(parseInt(num))) {
	console.error('Incorrect!');
} else {
	
	 var line = "";
  for (var i = 1; i <= num; i++) {
    for (var j = 1; j <= i; j++) {
      line += unit;
    }
    line += "\n";
  }
  console.log(line);		
}




/*
var num = parseInt(prompt("Please enter number between 1 and 20", " "));
var unit = "[~]";

if ( num < 1 || num > 20 || isNaN(parseInt(num))) {
	console.error('Incorrect!');
} else {
	
	for(var i = 0; i < num; i++) 
{
	var block = '';
	for(var x = 1; x < num-i; x++){
		block = block + '   ';
	}
	for(var m = 1; m <= (2*i+1); m++){
		block = block + unit;
	}
	console.log(block);
}
			
}
*/