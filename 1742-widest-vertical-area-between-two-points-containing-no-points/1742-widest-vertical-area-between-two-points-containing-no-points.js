/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
     let sorted = points.map(([x, _]) => x).sort((a, b) => a - b);
    let max = 0;
    for (let i = 0; i < sorted.length - 1; i++) {
        max = Math.max(max, sorted[i + 1] - sorted[i]);
    }
    return max;
};