/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let x = null, y = null;
    let prev = null;

    function inOrder(node) {
        if (!node) return;

        inOrder(node.left);

        if (prev && prev.val > node.val) {
            if (!x) x = prev;
            y = node;
        }
        prev = node;
        inOrder(node.right);
    }

    inOrder(root);

    const t = x.val;
    x.val = y.val;
    y.val = t;
};
// @lc code=end

let root = {
    val: 1,
    left: {
        val: 3,
        right: {
            val: 2,
        }
    }
}

recoverTree(root);