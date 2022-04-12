/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */

function sortStr(str) {
    const strArr = str.split('');
    return strArr.sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('');
}

var groupAnagrams = function(strs) {
    const hash = {};

    strs.forEach(str => {
        const key = sortStr(str);
        if (hash[key]) {
            hash[key].push(str);
        } else {
            hash[key] = [str];
        }
    });

    return Object.values(hash);
};
// @lc code=end

