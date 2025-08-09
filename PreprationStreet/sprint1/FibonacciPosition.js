const FibPosition = position => {
    let fib = [0, 1];
    for (let i = 1; i <= position; i++) {
        fib.push(fib[i] + fib[i - 1])
    }
    console.log(fib);
    return fib[position];
}
console.log(FibPosition(7))