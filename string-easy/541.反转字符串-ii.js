/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    const strArr = s.split('');

    for (let i = 0; i < strArr.length - 1; i += 2 * k) {
        let left = i, right = i + k > strArr.length ? strArr.length - 1 : i + k -1;

        while(left < right) {
            let t = strArr[left];
            strArr[left] = strArr[right];
            strArr[right] = t;
            left++;
            right--;
        }
    }

    return strArr.join('');
};
// @lc code=end

