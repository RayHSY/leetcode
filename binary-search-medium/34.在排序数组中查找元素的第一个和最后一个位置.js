/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left = 0, right = nums.length - 1;

    while(left <= right) {
        let mid = (left + right) >> 1;

        if (nums[mid] === target) {
            let start = mid = end = mid;

            while(nums[start - 1] === target) {
                start--;
            }
            while(nums[end + 1] === target) {
                end++;
            }

            return [start, end];
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return [-1, -1];
};
// @lc code=end

console.log(searchRange([5,7,7,8,8,10], 8));
console.log(searchRange([5,7,7,8,8,10], 6));
console.log(searchRange([], 6));