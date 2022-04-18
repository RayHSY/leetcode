/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    const hash = {};
    let count = 0;

    for (let i = 0; i < nums1.length; i++) {
        const num1 = nums1[i];
        for (let j = 0; j < nums2.length; j++) {
            const num2 = nums2[j];
            if (hash[num1 + num2] !== undefined) {
                hash[num1 + num2]++;
            } else {
                hash[num1 + num2] = 1;
            }
        }
    }

    for (let i = 0; i < nums3.length; i++) {
        const num3 = nums3[i];
        for (let j = 0; j < nums4.length; j++) {
            const num4 = nums4[j];
            if (hash[0 - (num3 + num4)]) {
                count += hash[0 - (num3 + num4)];
            }
        }
    }

    return count;
};
// @lc code=end

const a = [-1,-1];
const b = [-1,1]
const c = [-1,1]
const d = [1,-1]

console.log(fourSumCount(a, b, c, d))