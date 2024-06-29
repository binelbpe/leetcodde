/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let x = s.toLowerCase().replace(/[^a-z0-9]/g, "")
    let y = x.split("").reverse().join("")
    console.log(x)
    console.log(y)

    if (x === y) {
        return true
    }
    return false
};