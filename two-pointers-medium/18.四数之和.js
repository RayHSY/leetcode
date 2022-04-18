/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    if (nums.length < 4) return [];

    const result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 3; i++) {
       if (i > 0 && nums[i] === nums[i-1]) continue;

        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j-1]) continue;

            let left = j + 1, right = nums.length - 1;

            while(left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];

                if (sum > target) {
                    right --;
                    continue;
                } else if (sum < target) {
                    left++;
                    continue;
                } else {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    
                    while(left < right && nums[left] === nums[++left]);
                    while(left < right && nums[right] === nums[--right]);
                }
            }
        }
    }

    return result;
};
// @lc code=end

let nums = [1,0,-1,0,-2,2], target = 0;
console.log(fourSum(nums, target));