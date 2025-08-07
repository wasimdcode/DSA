// Checking the range and returning all the prime numbers
const rangePrime = range => {
    let primeNumber = [];
    for (let i = range[0]; i < range[1]; i++) { // Runnin the loop form the start to the end as input
        for (let j = 2; j < i; j++) { // Checking the prime number 
            if (parseInt(i / 2) === j) { // if we checked the half of the number so it's Prime number
                primeNumber.push(i) // Add to the empty array for storing prime numbers only 
                break; // break the loop and move to the next number
            } else {
                if (i % j === 0) { // if it is divisible by any number so it is not a prime number
                    break; // break it and move to the next number 
                }
                else {
                    continue; // if it's not divisible so checks rest of the number till the half
                }
            }
        }
    }
    return primeNumber; // after all the work done return the prime number list
}
console.log(rangePrime([10, 30])) // Output -> [ 11, 13, 17, 19, 23, 29 ]