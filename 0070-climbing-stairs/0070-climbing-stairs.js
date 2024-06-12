/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let a = [0, 1, 2]
    let c = 3
    while (c <= n) {
        a[c] = a[c - 1] + a[c - 2]
        c++
    }
    return a[n]
};