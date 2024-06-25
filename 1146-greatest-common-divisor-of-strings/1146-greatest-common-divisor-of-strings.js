/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    function gcd(a, b) {
        if (b === 0) return a;
        return gcd(b, a % b);
    }
    if (str1 + str2 !== str2 + str1) {
        return "";
    }
    let gcdLength = gcd(str1.length, str2.length);
    return str1.slice(0, gcdLength);
};