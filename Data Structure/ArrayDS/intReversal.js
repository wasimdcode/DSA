// For reversing a integer number we are doing 
// Convert it into string -> array -> string -> integer
const intReverse = int => {
    revint = parseInt(`${int}`.split('').reverse().join(''));
    return revint;
}
console.log(intReverse(1234));