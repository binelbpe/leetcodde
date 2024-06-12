/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {

    let n = nums.length
    if (k > n) {
        k = k - n
    }
    let a = nums.length - k
    if (a == 0) {
        return nums
    }
    let b = nums.splice(a , n - 1)
    nums.splice(0, 0, ...b)

    return nums
};