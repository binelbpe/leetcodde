/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr=[]
   s.trim().split(" ")
   
   for(let i=0;i<s.length;i++){
    if(s[i]==" "&&s[i+1]==" "){
        continue
    }

arr.push(s[i])
   }

   console.log(arr)
   
   return arr.join("").split(" ").reverse().join(" ").trim()
    
};