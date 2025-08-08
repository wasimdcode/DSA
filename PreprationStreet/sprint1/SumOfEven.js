const sumEven = range => {
    let sumEven = 0;
    for (let i = range[0]; i <= range[1]; i++) {
        if (i % 2 === 0) {
            sumEven += i;
        }
    }
    return sumEven;
}
console.log(sumEven([1, 10]));