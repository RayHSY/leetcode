/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const charMap = new Map();
    let start = 0, end = -1;
    let minStr = '';
    t.split('').map(char => {
        charMap.set(char, charMap.get(char) + 1 || 1);
    });

    let count = Array.from(charMap.keys()).length;

    while(end < s.length) {
        if (count === 0) {
            const temp = s.substring(start, end + 1); 
            minStr = !!minStr
                ? minStr.length > temp.length
                    ? temp
                    : minStr
                : temp;
            
            const current = s[start];
            if (charMap.has(current)) {
                charMap.set(current, charMap.get(current) + 1);
                if (charMap.get(current) > 0) count++;
            }

            start++;
        } else {
            end++;
            const current = s[end];
            if (charMap.has(current)) {
                charMap.set(current, charMap.get(current) - 1);
                if (charMap.get(current) === 0) {
                    count--;
                }
            }
        }
    }

    return minStr;
};
// @lc code=end
console.log(minWindow('ADOBECODEBANC', 'ABC'));
// console.log(minWindow('a', 'aa'));
