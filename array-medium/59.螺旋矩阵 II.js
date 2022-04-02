/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let loop = Math.floor(n / 2); // loop count
    let startX = startY = 0; // start position
    let mid = Math.floor(n / 2);
    let count = 1;
    let offset = 1;
    const result = new Array(n).fill(0).map(() => new Array(n));

    while(loop > 0) {
        let row = startX, col = startY;

        for(; col < startY + n - offset; col++) {
            result[row][col] = count++;
        }
        for(; row < startX + n - offset; row++) {
            result[row][col] = count++;
        }
        for(; col > startY; col--) {
            result[row][col] = count++;
        }
        for(; row > startX; row--) {
            result[row][col] = count++;
        }

        loop--;
        startX++;
        startY++;
        offset += 2; // 最左右两边不能访问了
    }

    if (n % 2 !== 0) {
        result[mid][mid] = count;
    }

    return result;
};
// @lc code=end

console.log(generateMatrix(4));