function primeSifter(n) {
  //creates and pushes to the array of all numbers up to n
  var primes = [];
  for (var i = 1; i <= n; i++) {
    primes.push(i);
  }

  //starting with 2, this loops through each number up to half the original n, then
  for (var i = 2; i <= n / 2; i++) {
    var primesLength = primes.length;
    for (var j = i + 1; j < primesLength; j++) {
      if (primes[j] % i === 0) {
        primes.splice(j, 1);
      }
    }
  }

  return primes;
};
