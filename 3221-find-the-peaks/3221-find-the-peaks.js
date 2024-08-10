/**
 * @param {number[]} mountain
 * @return {number[]}
 */
var findPeaks = function(mountain) {
    const array=[];
    for(let i=1;i<mountain.length-1;i++){
if(mountain[i]>mountain[i+1]&&mountain[i]>mountain[i-1]){
array.push(i)
}
    }
    return array;
};
