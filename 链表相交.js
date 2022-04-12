/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) return null;

    let retA = headA, retB = headB;

    while(retA !== retB) {
        retA = retA === null ? headB : retA.next;
        retB = retB === null ? headA : retB.next;
    }

    return retA;

};


// test

let some = new ListNode(10);
[11, 16, 71, 18].reduce((pre, cur) => {
    pre.next = new ListNode(cur);
    return pre.next;
}, some);

let a = new ListNode(0);
[1,2, some].reduce((pre, cur) => {
    pre.next = cur?.val ? cur : new ListNode(cur);
    return pre.next;
}, a);

let b = new ListNode(0);
[5, 6, 7, 8, some].reduce((pre, cur) => {
    pre.next = cur?.val ? cur : new ListNode(cur);
    return pre.next;
}, b);

console.log(getIntersectionNode(a, b))
