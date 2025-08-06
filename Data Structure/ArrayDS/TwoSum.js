const sumArray = []
const twoSum = (num, tar) => {
    for (let i = 0; i < num.length; i++) {
        for (let j = 0; j < num.length; j++) {
            if (num[i] + num[j] === tar) {
                sumArray[0] = i;
                sumArray[1] = j;
                return sumArray;
            }
        }
    }
    return "Nothing Matched the Target"
}
console.log(twoSum([2, 7, 11, 15], 9))