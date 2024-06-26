/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    let count = 0
    let f = true
    for (let i = 0; i < words.length; i++) {
        f = true
        let m = words[i]
        for (let j = 0; j < m.length; j++) {
            if (!(allowed.includes(m[j]))) {
                f = false
            }
        }
        if (f) {
            count++
        }
    }
    return count
};