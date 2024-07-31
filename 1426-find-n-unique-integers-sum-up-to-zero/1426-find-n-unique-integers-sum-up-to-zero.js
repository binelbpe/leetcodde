/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
  let arr = new Array(n);
    let count = 1;
 for (let i = 0; i < Math.floor(n / 2); i++) {
        arr[i] = -count;
        arr[n - 1 - i] = count;
        count++;
    }
 if (n % 2 !== 0) {
        arr[Math.floor(n / 2)] = 0;
    }

    return arr;
};