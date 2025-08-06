// Fibonacci is a series it grows with the sum of previous one
const fibonacci = number => {
    let fib = [0, 1]; // Initialising first two number of series it will be same 
    for (let i = 2; i < number; i++) { // running a loop until it prints n times
        fib[i] = fib[i - 1] + fib[i - 2]; // adding new number into an array by adding previous two values 
    }
    return fib;
}
console.log(fibonacci(10)) // Output -> [0, 1,  1,  2,  3, 5, 8, 13, 21, 34]