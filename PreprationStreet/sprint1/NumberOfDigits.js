const NumberDigits = number => {
    let digits = number.toString().split("");
    return digits.length;
}
console.log(NumberDigits(123456789))