/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hash = {};

    for (let i = 0; i < nums.length; i++) {
        let key = target - nums[i];
        if (hash[key] !== undefined) {
            return [hash[key], i];
        } else if (hash[nums[i]] === undefined) {
            hash[nums[i]] = i;
        }
    }

    return [];
};
// @lc code=end

twoSum([2,7,11,15], 9);