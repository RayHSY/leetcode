/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1;
    let mid;

    while(left <= right) {
        mid = (left + right) >> 1;

        if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            return mid;
        }
    }

    return target < nums[mid] ? mid : mid + 1;
};
// @lc code=end

console.log(searchInsert([0, 1, 2, 3], -1))
console.log(searchInsert([0, 1, 2, 3], 4))
console.log(searchInsert([0, 1, 2, 3], 3))
console.log(searchInsert([0, 1, 2, 3], 2.5))

