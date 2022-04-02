/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let start = 1, end = num >> 1;

    if (num === 1 || num === 0) return true;

    while (start <= end) {
        let mid = (start + end) >> 1;

        if (mid * mid > num) {
            end = mid - 1;
        } else if (mid * mid < num) {
            start = mid + 1;
        } else {
            return true;
        }
    }

    return false;
};
// @lc code=end
console.log(isPerfectSquare(20))
console.log(isPerfectSquare(0))
console.log(isPerfectSquare(1))
console.log(isPerfectSquare(169))
