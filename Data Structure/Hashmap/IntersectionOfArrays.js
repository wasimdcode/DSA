const intersection = (nums1,nums2) => {
    let map = new Map();
    nums1.length > nums2.length ? n = nums1.length : n = nums2.length;
    for(let i = 0; i < n; i++){
        if(nums1.includes(nums2[i])){
            map.set(nums2[i],nums2[i])
        }
    }
    let arr = [];
    map.forEach((e) => {
        arr.push(e);
    });
    return arr;
}
console.log(intersection([4,9,5],[9,4,9,8,4]));
// let arr = [12,3,4,54]
// console.log(arr.includes(12));
