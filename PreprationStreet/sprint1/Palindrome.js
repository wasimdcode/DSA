// Checking the number or string is palindrome or not 
const isPalindrome = word => {
    const rev = word.toString().split('').reverse().join(''); // Converting and reversing the number or string 
    if (rev == word) return `Yess ${word} is Palindrome`; // Checking the Palindrome if it's true
    return `No ${word} is not a Palindrome`; // if it's not true
};
console.log(isPalindrome(221)); // Output -> No
console.log(isPalindrome(121)); // Output -> Yess
console.log(isPalindrome("hat")); // Output -> No
console.log(isPalindrome("madam")); // Output -> Yess