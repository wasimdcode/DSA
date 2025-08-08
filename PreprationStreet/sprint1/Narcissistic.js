const narcisstic = number => {
    let num = number.toString().split('');
    let nar = 0;
    for (let i = 0; i < num.length; i++) {
        nar += Math.pow(parseInt(num[i]), num.length)
    }
    if (number === nar) return "yess"
    return nar;
}
console.log(narcisstic(153))