/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function(root, minNode = null, maxNode = null) {
    // 中序遍历
    // const stack = [];
    // let order = -Infinity;

    // while(root || stack.length) {
    //     if (root) {
    //         stack.push(root);
    //         root = root.left;
    //     } else {
    //         root = stack.pop();

    //         if (order >= root.val) {
    //             return false;
    //         }
    //         order = root.val;
    //         root = root.right;
    //     }
    // }

    // return true;

    // 递归
    
    if (!root) return true;
    if (minNode && minNode.val >= root.val) return false;
    if (maxNode && maxNode.val <= root.val) return false;

    return isValidBST(root.left, minNode, root) && isValidBST(root.right, root, maxNode);
};
// @lc code=end

