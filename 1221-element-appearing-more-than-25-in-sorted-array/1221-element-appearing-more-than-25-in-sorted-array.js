/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let a=[]
    let b=[]
    count=1
        let c=arr.length
    for(let i=0;i<c;i++){
        if(arr[i]!=arr[i+1]){
             if((count/c*100)>25){
            return arr[i]
        }
a.push(count)
b.push(arr[i])
count=0
console.log(a,b)
        }
        count++
    }
   
};