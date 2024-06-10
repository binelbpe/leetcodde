/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    let count = 0
    let a = [...heights]
    heights.sort((a, b) => a - b)
    for (let i = 0; i < heights.length; i++) {
        if (a[i] != heights[i]) {
            count++
        }
    }
    return count


};