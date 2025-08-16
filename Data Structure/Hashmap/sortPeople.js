// let arr = [10, 3, 5, 6, 10, 1, 3, 5, 5, 7]
// let map = new Map();
// for (let i = 0; i < arr.length; i++) {
//     if (map.has(`${arr[i]}`)) {
//         let freq = map.get(`${arr[i]}`);
//         map.set(`${arr[i]}`, freq += 1)
//     }
//     else {
//         map.set(`${arr[i]}`, 1)
//     }
//     map.set(arr[i], (map.get(arr[i]) || 0) + 1)
// }

// console.log(map)
const sortPeople = (names, heights) => {
    let map = new Map();

    for (let i = 0; i < names.length; i++) {
        map.set(heights[i], names[i]);
    }
    heights.sort((a, b) => b - a);
    let output = []
    for (let j = 0; j < names.length; j++) {
        output.push(map.get(heights[j]));
    }
    return output;
}
console.log(sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150]))