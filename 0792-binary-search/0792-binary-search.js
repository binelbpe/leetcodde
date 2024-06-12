/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {


    let r = nums.length - 1
    let l = 0
    while (l <= r) {
        let middle = Math.floor((l + r) / 2)
        console.log(middle)
        if (nums[middle] === target) {
            return middle
        }
        if (nums[middle] > target) {
            r = middle - 1
        } else {
            l = middle + 1
        }

    }
    return -1
};