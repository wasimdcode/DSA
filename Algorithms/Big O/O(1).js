// O of (1) also Constant time it means that our time will be remain constant 
// no matter how many data we have 
// it's possible bcz we know the location of our data where we have to do so it will straight go to that data 
const boxes = [1, 2, 3, 4, 5];
const find = (boxes, index) => boxes[index];
console.log(find(boxes, 3)) // Output will be 4