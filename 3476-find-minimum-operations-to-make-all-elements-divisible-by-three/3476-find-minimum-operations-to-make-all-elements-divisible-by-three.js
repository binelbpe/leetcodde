/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    let count = 0;
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] % 3 != 0) count++;
    }
    return count;
};