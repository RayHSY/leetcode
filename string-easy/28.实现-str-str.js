/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0) return '';

    const next = getNext(needle);
    let j  = 0;

    for (let i = 0; i < haystack.length; i++) {
        while (j > 0 && haystack[i] !== needle[j]) {
            j = next[j - 1];
        }

        if (haystack[i] === needle[j]) {
            j++;
        }
        if (j === needle.length) return i - j + 1;
    }

    return -1;
};

function getNext(str) {
    let index = 0;
    const next = [0];

    // [a, a, b, a, a, f]
    // [0, 1, 0, 1, 2, 0]
    for (let i = 1; i < str.length; i++) {
        while (index > 0 && str[i] !== str[index]) {
            index = next[index - 1];
        }

        if (str[i] === str[index]) {
            index++;
        }

        next.push(index);
    }

    return next;
}
// @lc code=end

