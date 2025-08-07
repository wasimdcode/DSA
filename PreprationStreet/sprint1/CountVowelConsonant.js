// It is for counting how many Vowels and consonants are in a string 
const countVowCons = word => {
    let string = word.toLowerCase().replace(/\s/g, "").split(''); // first convert all the word into lowercase for checking all the chars
    let vowelsList = "aeiou"  // then removing spaces for later calculation and then converting it into an array
    let vowels = 0;
    for (let i = 0; i < string.length; i++) {
        if (vowelsList.includes(string[i])) { // checking is there is any vowels or not in string
            vowels++; // if it is there so increase the counting by 1
        }
    }
    let consonants = string.length - vowels; // and rest of the letters will be consonants after removing vowels in counting
    return `Vowels -> ${vowels} and Consonants -> ${consonants}` // returing the numbers
}
console.log(countVowCons("Hello WOrld")) // Output -> Vowels -> 3 and Consonants -> 7