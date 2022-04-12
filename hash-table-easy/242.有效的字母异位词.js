/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    let hash = new Array(26).fill(0);
    let base = 'a'.charCodeAt();

    for (const char of s) {
        hash[char.charCodeAt() - base]++;
    }

    for (const char of t) {
        if (hash[char.charCodeAt() - base] === 0) return false;
        hash[char.charCodeAt() - base]--;
    }

    return true;
};
// @lc code=end

