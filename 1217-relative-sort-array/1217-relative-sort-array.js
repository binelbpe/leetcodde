/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let a=[]
    let b=[]
    for(let i=0;i<arr2.length;i++){
        for(let j=0;j<arr1.length;j++){
            if(arr1[j]===arr2[i]){
                a.push(arr1[j])
            }
           
        
        }
    }
    for(let k=0;k<arr1.length;k++){
       if(!(arr2.includes(arr1[k]))){
        b.push(arr1[k])
       } 
    }
    console.log(a)
    console.log(b)
  b.sort((a,b)=>a-b)
return a.concat(b)
    
};