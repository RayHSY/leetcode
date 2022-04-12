/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

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
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let preHead = new ListNode(0, head);
    let tmp = preHead;

    while(tmp.next && tmp.next.next) {
        let cur = tmp.next.next,
            pre = tmp.next;

        tmp.next = cur;
        pre.next = cur.next;
        cur.next = pre;

        tmp = pre
    }

    return preHead.next;
};
// @lc code=end

