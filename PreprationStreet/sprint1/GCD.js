// GCD is the Greatest common diviser 
// for finding this we need to divide larger number by smaller number
// then checks the remainder if it's a number > 0 so we will divide again 
// by larger value to remainder again 
// and when we got remainder as 0 so we will get GCD which is previous remainder we got 
const findGCD = (a, b) => {
    while (b !== 0) { // Checks the remainder till it becomes 0
        const remainder = a % b; // mod divide the number 
        a = b; // assign smaller value to a 
        b = remainder; // then assign remainder to b 
    }
    return a;   // return a if remainder becomes 0 and a is our GCD
}
console.log(findGCD(48, 18)); // Output -> 6