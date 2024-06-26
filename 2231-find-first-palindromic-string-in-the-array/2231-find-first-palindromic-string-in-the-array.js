/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function (words) {

    for (let i = 0; i < words.length; i++) {
        let k = true
        let m = words[i]
        for (let j = 0; j < m.length - 1; j++) {
            if (m[j] != m[m.length - 1 - j]) {
                k = false
            }
        }
        if (k) {
            return words[i]
        }

    }
    return ""
};