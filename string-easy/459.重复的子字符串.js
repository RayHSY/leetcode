/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    if (s.length === 0) return false;

    const next = getNext(s);

    if (next[next.length - 1] !== 0 && next.length % (next.length - next[next.length - 1]) === 0) {
        return true;
    }

    return false;
};

function getNext(s) {
    const next = [0];
    let index = 0;

    for (let i = 1; i < s.length; i++) {
        while(index > 0 && s[index] !== s[i]) {
            index = next[index - 1];
        }

        if (s[index] === s[i]) {
            index++;
        }

        next.push(index);
    }

    return next;
}
// @lc code=end

