/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    if (nums1.length < nums2.length) {
        let _ = nums1;
        nums1 = nums2;
        nums2 = _;
    }

    const nums1Map = new Map();
    const result = [];
    for (let i = 0; i < nums1.length; i++) {
        if (nums1Map.has(nums1[i])) {
            nums1Map.set(nums1[i], nums1Map.get(nums1[i]) + 1);
        } else {
            nums1Map.set(nums1[i], 1);
        }
    }

    for (let i = 0; i < nums2.length; i++) {
        if (nums1Map.has(nums2[i]) && nums1Map.get(nums2[i]) !== 0) {
            result.push(nums2[i]);
            nums1Map.set(nums2[i], nums1Map.get(nums2[i]) - 1);
        }
    }

    return result;

};
// @lc code=end

