/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let start = new ListNode(0, head);
    let pre = start;

    while(pre && pre.next) {
        if (pre.next.val === val) {
            pre.next = pre.next.next;
        } else {
            pre = pre.next;
        }
    }

    return start.next;
};
// @lc code=end

const test = [7,7,7,7];
const h = new ListNode(test[0]);
let p = h;
for(let i = 1; i < test.length; i++) {
    p.next = new ListNode(test[i]);
    p = p.next;
}

let result = removeElements(h, 7);
console.log(result);