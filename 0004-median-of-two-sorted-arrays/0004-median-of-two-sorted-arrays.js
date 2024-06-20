/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
   let a=[...nums1,...nums2]
   a.sort((a,b)=>a-b)
   if(a.length%2==0){
    let c=Math.floor((a.length-1)/2)
    let x= (a[c]+a[c+1])/2
    return x
   }else {
    let c= Math.ceil((a.length-1)/2)
    return a[c]
   }
};