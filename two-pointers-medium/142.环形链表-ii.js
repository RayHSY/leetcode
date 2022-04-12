/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (!head || !head.next) return null;
    let slow = fast = head;
    let start = end = null;

    while(fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;

        if (fast === slow) {
            start = head;
            end = fast;
            break;
        }
    }

    while(start !== end) {
        start = start.next;
        end = end.next;
    }

    return start;
};
// @lc code=end

