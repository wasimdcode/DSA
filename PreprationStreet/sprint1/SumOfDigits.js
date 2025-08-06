// Finding the Sum of all the digits in a number
const sumDigits = number => {
    let num = number.toString().split(''); // 1. we need to convert number into an array for iterating 
    let sum = 0; // Variable for storing the final  sum
    let temp; // temp var for storing temprory values
    for (let i = 0; i < num.length; i++) {
        temp = Number(num[i]); // storing first digits in temp var 
        sum = sum + temp; // adding into previous digits into next digits 
    }
    return sum;
}
console.log(sumDigits(123)) // Output -> 6