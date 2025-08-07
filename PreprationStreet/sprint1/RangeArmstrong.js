// Giving all the Armstrong numbers from a range
const rangeArmstrong = (range) => {
    let arm = [];
    for (let i = range[0]; i < range[1]; i++) { // loop will start from the starting value and end to ending value in range
        let power = i.toString().split(''); // Storing the digits count in variable for the later calculations
        let sum = 0;
        for (let j = 0; j < power.length; j++) { // this loop for calculating all the number's square root and adding into a sum variable
            sum += Math.pow(parseInt(power[j]), power.length) // it will calculate powers of each digit in a number
        }
        if (sum === i) {// checks the number is armstrong or not
            arm.push(sum); // if it is so it will add the value to armstrong array
        }
    }
    return arm; // return the armstrong list 
}
console.log(rangeArmstrong([1, 500])) // Output -> [1,2,3,4,5,6,7, 8, 9, 153, 370, 371,407]