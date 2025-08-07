// for finding the LCM we need to first find the GCD
const findLCM = (a, b) => {
    let A = a;
    let B = b;
    let GCD = null;
    while (b !== 0) { // this loop will give GCD of number
        let remainder = a % b;
        a = b;
        b = remainder;
    }
    GCD = a; 
    let LCM = (A * B) / GCD; // and with this formula we will get LCM
    return LCM;
}
console.log(findLCM(12, 18)) // Output -> 36