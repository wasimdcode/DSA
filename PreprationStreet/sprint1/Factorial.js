// Factorial is a number when we multiply one number to the next number until it ends
const factorial = number => {
    let n = 1; // Counting will start form the 1
    for (let i = 1; i <= number; i++) {
        n = i * n; // Multipy to the next number and store it for the next number repeat the process 
    }
    return n;
}
console.log(factorial(5)) // Output -> 120