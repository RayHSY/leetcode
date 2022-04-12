/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) return false;
    const hash = new Array(26).fill(0);
    const base = 'a'.charCodeAt();

    for (const char of magazine) {
        hash[char.charCodeAt() - base]++;
    }

    for (const char of ransomNote) {
        if (hash[char.charCodeAt() - base] === 0) return false;
        hash[char.charCodeAt() - base]--;
    }

    return true;
};
// @lc code=end

