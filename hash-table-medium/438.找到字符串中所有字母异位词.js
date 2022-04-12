/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if (p.length > s.length) return [];

    const hashP = new Array(26).fill(0);
    const hashS = new Array(26).fill(0);
    const base = 'a'.charCodeAt();
    const result = [];

    for (let i = 0; i < p.length; i++) {
        hashP[p[i].charCodeAt() - base]++;
        hashS[s[i].charCodeAt() - base]++;
    }

    if (hashP.toString() === hashS.toString()) {
        result.push(0);
    }

    for (let i = 0; i < s.length - p.length; i++) {
        hashS[s[i].charCodeAt() - base]--;
        hashS[s[i + p.length].charCodeAt() - base]++;

        if (hashP.toString() === hashS.toString()) {
            result.push(i + 1);
        }
    }

    return result;
};
// @lc code=end

const s = 'cbaebabacd';
const p = "abc";
console.log(findAnagrams(s, p))