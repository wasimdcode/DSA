const isPrimeNum = number => {
    for(let i = 2; i < number; i++){
        if(number / 2 === i){
            if(number % i === 0) return `${number} is Not a Prime Number"`
        }else{
            return `${number} is a Prime Number`
        };
    };
    return `${number} is a Prime Number`
};
console.log(isPrimeNum(4));