const sumOdd = range => {
    let sumOdd = 0;
    for (let i = range[0]; i <= range[1]; i++) {
        if (i % 2 !== 0) {
            sumOdd += i;
        }
    }
    return sumOdd;
}
console.log(sumOdd([1, 10]))