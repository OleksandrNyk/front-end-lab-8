var quiz = confirm("Do you want to play a game?");


if (quiz == true) {
var maxNumb = 5;
var prize = 0;
var maxPrize = 10;
var preis = maxPrize
var nRange = Math.floor(Math.random() * (maxNumb+1));
	for (var i = 3; i > 0; i--) {
	
	var message = prompt('Enter a number from 0 to ' + maxNumb + '\nAttempts left: ' + i + '\nTotal prize: ' + prize + '\nPossible prize on current attempt: ' + preis + '$');
	}
	if(message == nRange){
		prize =  preis;
	} else {
		preis = Math.floor(preis/2);	
	 	}
	 	console.log('Thank you for a game. Your prize is: ' + prize + '$');
	 	
	} else {
	 	console.log('You did not become a millionaire');
}
/* :-/ */