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
    const nodes = [];
    let x = null, y = null;

    function inOrder(node) {
        if (!node) return;

        inOrder(node.left);
        nodes.push(node);
        inOrder(node.right);
    }

    inOrder(root);

    for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        
        if (!x) {
            if (node.val > nodes[i + 1].val) {
                x = node;
                y = nodes[i + 1]; 
                i++;
            }
        } else {
            if (node.val < nodes[i - 1].val) {
                y = node;
                break;
            }
        }
    }

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