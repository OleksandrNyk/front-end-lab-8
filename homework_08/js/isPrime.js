let isPrime = function(number) {
  for(let i = 2; i < number; i++)
    if(number % i === 0) return false;
  return number !== 1;
}


/*console.log(isPrime(2));*/