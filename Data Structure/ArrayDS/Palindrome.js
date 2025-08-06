// Palindrome are those words that still remains same even we read on reverse 
// so for checking them first we need to reverse a string 
// then we will compare both of them 
const palindromeFind = str => {
    const revstr = str.split('').reverse().join('');
    if (revstr === str) {
        return `Yes ! it's Palindrome -> ${str} Reversed -> ${revstr}`
    }
    return `No it's not an Palindrome -> ${str} Reversed -> ${revstr}`
}
console.log(palindromeFind("madam"));
console.log(palindromeFind("danger"));