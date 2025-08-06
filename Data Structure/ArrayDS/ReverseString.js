// Revesring a String for doing this we need to do 3 things
// 1. Convert a string into Array
// 2. Reverse an Array
// 3. Convert Array into String again

const reverseString = (string) => {
    // Here using Split Function for converting String into Array
    const array = string.split('');
    const revArray = [];
    let j = 0;
    for (let i = array.length; i > -1; i--) {
        // Reversing that array and storing it in new array
        revArray[j] = array[i];
        j++;
    }
    // Converting reverseArray into String again by using Joing Function
    string = revArray.join('');
    console.log(string);
}
reverseString("wasim");
// or we can use short way reversing a array
const shortway = str => str.split('').reverse().join('');
console.log(shortway("wasim"));