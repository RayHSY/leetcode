/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    if (nums1.length < nums2.length) {
        let _ = nums2;
        nums2 = nums1;
        nums1 = _;
    }

    const nums1Set = new Set(nums1);
    const resultSet = new Set();

    for (let i = 0; i < nums2.length; i++) {
        if (nums1Set.has(nums2[i])) {
            resultSet.add(nums2[i]);
        }
    }

    return Array.from(resultSet);
};
// @lc code=end

