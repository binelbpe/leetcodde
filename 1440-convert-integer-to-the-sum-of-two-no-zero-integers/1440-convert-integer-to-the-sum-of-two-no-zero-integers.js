/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    for(let i=1;i<=n;i++){
        let a=(n-i).toString()
        let b=i.toString()
        if(!a.includes("0")&&!b.includes('0')){
            return [i,n-i]
    }
    }
};