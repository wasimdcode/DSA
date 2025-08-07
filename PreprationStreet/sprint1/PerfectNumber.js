// Perfect number when if we sum of all the number of their divisor and 
// we get the same number as the sum so that's called perfect number 
// 28 is a perfect number because its divisors (1, 2, 4, 7, 14) sum up to 28.
const isPerfectNum = number => {
    let sum = 0;
    for (let i = 1; i < number; i++) { // Loop for Checking every number till 28
        if (number % i === 0) { // checks it is divisable to that number or not
            sum += i; // if it's so it will add up to the all divisors
        }
    }
    if (sum === number) return `Perfect Number -> ${number}` // if sum of divisors and numbers are equal it's perfect Number
    return `Not a Perfect Number -> ${number}` // If they are not same so it's not a perfect number
}
console.log(isPerfectNum(28)); // Yes it is a perfect number
console.log(isPerfectNum(16)); // Not a perfect number