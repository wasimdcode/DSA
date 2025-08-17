const twoSum = (nums, target) => {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [i, map.get(target - nums[i])]
        }
        else {
            map.set(nums[i], i)
        }
        return [-1, -1]
    }
    // for(let i = 0 ; i < nums.length; i++){
    //     map.set(i,nums[i])
    // }
    // for(let j = 0; j < nums.length; j++){
    //     if(map.get(j) + map.get(j+1) === target){
    //         return `[${j},${j+1}]`
    //     }
    // }
    // return map.entries();
}
console.log(twoSum([3, 3], 6));
