const checkPalindrome = string => {
    let Palindrome = "";
    let revString = string.split('').reverse();
    for (let i = 0; i < string.length; i++) {
        for (let j = i; j < string.length; j++) {
            if (revString[i] === string[j]) {
                Palindrome += string[j];
                break;
            }
            else {
                break;
            }
        }
    }
    return Palindrome;
}
console.log(checkPalindrome("babad"));