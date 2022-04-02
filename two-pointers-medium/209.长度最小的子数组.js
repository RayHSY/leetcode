/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let start = end = 0;
    let sum = 0, resultLength = 0;

    while (end < nums.length) {
        sum += nums[end];

        while(sum >= target) {
            sum -= nums[start];
            resultLength = resultLength === 0 || resultLength > end - start + 1 ? end - start + 1 : resultLength;
            start++;
        }
        end++;
    }
    return resultLength;
};
// @lc code=end

console.log(minSubArrayLen(11, [1,0,0,0,0]))