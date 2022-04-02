/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const strArr = s.split('');
    const chars = new Set();

    let diffFlag = 0;
    let maxLen = 0;

    for (let i = 0; i < strArr.length; i++) {
        if (i !== 0) {
            chars.delete(strArr[i - 1]);
        }
        while (diffFlag < strArr.length && !chars.has(strArr[diffFlag])) {
            chars.add(strArr[diffFlag]);
            diffFlag++;
        }

        maxLen = Math.max(maxLen, diffFlag - i);
    }

    return maxLen;

};
// @lc code=end