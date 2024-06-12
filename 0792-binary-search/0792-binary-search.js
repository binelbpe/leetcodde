/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target,l=0,r=nums.length-1) {
  if(r<l){
    return -1
  }
  let middle=Math.floor((l+r)/2)
  if(nums[middle]===target){
    return middle
  }
if(nums[middle]>target){
   return search(nums,target,l,middle-1)
}else{
    
     return search(nums,target,middle+1,r)
}
};