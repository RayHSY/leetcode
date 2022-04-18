/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let left, right;
    const retSet = new Set();

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        left = i + 1;
        right = nums.length - 1;
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum < 0) {
                left++;;
                continue;
            } else if (sum> 0) {
                right--;
                continue;
            } else {
                retSet.add(`${nums[i]},${nums[left]},${nums[right]}`);
                left++;
                right--;
            }
        }
    }

    return Array.from(retSet).map(d => d.split(','));
};
// @lc code=end
threeSum([-1,0,1,2,-1,-4])
