/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function (nums) {
    if (nums.length === 0) return 0;
    
    nums.sort((a, b) => a - b); // Sort the array first
    let moves = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            let gap = nums[i - 1] - nums[i] + 1;
            nums[i] += gap;
            moves += gap;
        }
    }
    
    return moves;
};
