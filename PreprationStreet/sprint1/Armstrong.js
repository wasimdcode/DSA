// It's comes when all the digits are giving the same result after finding the root by the number of digits 
// of each digits in a number and got the same total or it is also called as nihilist number
const isArmstrong = num => {
    const pow = num.toString().length; // converting to string for finding the power of digits 
    const string = num.toString().split(''); // converting number into digits for performing addition 
    let final = null; // for saving the final output
    for (let i = 0; i < pow; i++) { // Running the loop until the length of number
        final += Math.pow(string[i], pow); // adding all the result after finding the root of each digits 
    }
    if (num === final) return "Yess ArmStrong Number"; // Conditoin for checking that the result is equals or not
    return "Not a ArmStrong Number";
}
console.log(isArmstrong(153)) // Output ->  yess 153