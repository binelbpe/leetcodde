/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {

    let count = 0
    let c = 0
    let curr = head
    while (curr) {
        count++
        curr = curr.next
    }
    if (n == 1 && count == 1) {
        return head = null
    }
 if(count==n){
    curr=head.next
    head.next=null
    head=curr
    return head
 }
    curr = head
    while (curr) {
        if (c === (count - (n + 1))) {
            curr.next = curr.next.next
           return head
        }
        c++
        curr = curr.next
    }
    
};