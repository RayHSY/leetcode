/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const hash = new Set();

    const getSum = (num) => {
        let sum = 0;

        while(num) {
            sum += Math.pow(num % 10, 2);
            num = Math.floor(num / 10);
        }

        return sum;
    }

    while(true) {
        if (hash.has(n)) return false;
        if (n === 1) return true;

        hash.add(n);
        n = getSum(n);
    }
};
// @lc code=end

isHappy(19)