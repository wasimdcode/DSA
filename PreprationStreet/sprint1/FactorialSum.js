const FactorialSum = number => {
    let temp = 1;
    for (let i = 1; i <= number; i++) {
        temp = i * temp;
    }
    let digit = temp.toString().split('')
    let sum = 0;
    for (let j = 0; j < digit.length; j++) {
        sum += parseInt(digit[j]);
    }
    return sum;
}
console.log(FactorialSum(4))
