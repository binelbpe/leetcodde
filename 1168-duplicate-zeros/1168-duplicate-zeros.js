/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0)
            arr.pop()
            i = i + 1
        }
    }
    return arr
};