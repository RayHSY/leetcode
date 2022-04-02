/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let start = 0, end = nums.length - 1;
    let newArr = [];

    for (let i = nums.length - 1 ; i >= 0; i--) {
        if (nums[start] * nums[start] < nums[end] * nums[end]) {
            newArr[i] = nums[end] * nums[end];
            end--;
        } else {
            newArr[i] = nums[start] * nums[start];
            start++;
        }
    }

    return newArr;
};
// @lc code=end

