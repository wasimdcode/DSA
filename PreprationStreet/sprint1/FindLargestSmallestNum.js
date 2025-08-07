// it's also a easy way by using built in function of Javascript array
// i will try to find another approach to do it
const findLargestSmallest = number => {
    let sorted = [...number].sort((a, b) => a - b); // first we can sort the array so it will be easy to find wihtout any loop
    let largest = sorted[sorted.length - 1]; // in sorted array the biggest number always go to the end so last is the largest number
    let smallest = sorted[0]; // and smallest comes at the first 
    return `Largest -> ${largest} Smallest -> ${smallest}`; // giving the values
}
console.log(findLargestSmallest([2, 4, 5, 3, 34, 3, 4, 5])) // Output -> Largest -> 34 Smallest -> 2