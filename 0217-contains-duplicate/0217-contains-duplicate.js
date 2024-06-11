/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
 
 let a= new Set(nums)
 if(nums.length>a.size){
    return true
 }else return false
};