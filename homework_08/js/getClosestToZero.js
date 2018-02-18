let getClosestToZero = function(){
	for (let i = 0; i < arguments.length; i++) {
        if (Math.abs(arguments[0]) > Math.abs(arguments[i])) {
            arguments[0] = arguments[i];
        }
    }
    return arguments[0];
}

/*console.log(getClosestToZero(15,4,6,-3,9));*/