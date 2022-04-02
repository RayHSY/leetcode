/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let start = 1, end = x >> 1;

    while(start <= end) {
        let mid = (start + end) >> 1;

        if (mid * mid > x) {
            end = mid - 1;
        } else if (mid * mid < x) {
            start = mid + 1;
        } else {
            return mid;
        }
    }

    return start * start > x ? end : start;
};
// @lc code=end
console.log(mySqrt(1))
console.log(mySqrt(168))
console.log(mySqrt(169))
console.log(mySqrt(170))