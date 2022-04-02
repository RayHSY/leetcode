/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const result = [];
    const n = matrix.length, m = matrix[0].length;
    let startX = startY = 0;
    let endX = n - 1, endY = m - 1;

    while(startX < endX && startY < endY) {
        let col = startY, row = startX;
        for (; col < endY; col++) {
            result.push(matrix[row][col]);
        }
        for (; row < endX; row++) {
            result.push(matrix[row][col]);
        }
        for (; col > startY; col--) {
            result.push(matrix[row][col]);
        }
        for (; row > startX; row--) {
            result.push(matrix[row][col]);
        }

        startX++;
        startY++;
        endX--;
        endY--;
    }

    while (startY === endY && startX < endX) {
        result.push(matrix[startX++][startY]);
    }

    while(startX === endX && startY < endY) {
        result.push(matrix[startX][startY++]);
    }

    if (startX === endX && startY === endY) {
        result.push(matrix[startX][startY]);
    }

    return result;
};
// @lc code=end
console.log(spiralOrder([[1,11],[2,12],[3,13],[4,14],[5,15],[6,16],[7,17],[8,18],[9,19],[10,20]]));
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))
console.log(spiralOrder([[1], [2], [3]]))
