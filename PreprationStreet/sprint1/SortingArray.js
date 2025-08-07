// it's such a easy to sort a array in javascript 
// there some other appraoches but i don't know as of now 
// so in future i will try to do it by manually 
const sorted = numbers => {
    return numbers.sort((a, b) => a - b);
}
console.log(sorted([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])) 