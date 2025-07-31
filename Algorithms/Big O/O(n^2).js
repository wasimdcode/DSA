//O of n's power 2 is Imagine you have n kids in a classroom.
// Each kid wants to give a high-five ✋ to every other kid.
function countHighFives(n){
    let highFives = 0;
    for(let i = 0; i < n; i++){ //First Kid
        for(let j = i + 1; j < n; j++){ // Other kids they haven't high fived
            highFives++;
        }
    }
    return highFives;
}
console.log(countHighFives(3)); //Output will be 3
console.log(countHighFives(4)); //Output will be 6
console.log(countHighFives(10));//Output will be 45
