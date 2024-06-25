/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let a = []
    let x = Math.max(...candies)
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= x) {
            a.push(true)
        } else {
            a.push(false)
        }
    }

return a
};