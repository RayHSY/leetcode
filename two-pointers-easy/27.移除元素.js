/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let fastIndex = slowIndex = 0;

    while(fastIndex < nums.length) {
        if (nums[fastIndex] !== val) {
            nums[slowIndex] = nums[fastIndex];
            slowIndex++;
        }
        fastIndex++;
    }

    return slowIndex;
};
// @lc code=end
console.log(removeElement([3,2,2,3], 3))
