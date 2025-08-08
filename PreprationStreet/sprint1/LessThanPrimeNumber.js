const PrimeList = number => {
    if (number < 2) return [];
    let primeNumbers = [2];

    for (let i = 3; i < number; i += 2) { // Check odd numbers only
        let isPrime = true;
        // Check divisors up to square root of i
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primeNumbers.push(i);
        }
    }
    return primeNumbers;
}
console.log(PrimeList(20)); // Output -> [2, 3, 5, 7, 11, 13, 17, 19]