/*
 * @lc app=leetcode.cn id=904 lang=javascript
 *
 * [904] 水果成篮
 */

// @lc code=start
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    const map = new Map();
    let len = -1;
    for (let start = 0, end = 0; end < fruits.length; end++) {
        map.set(fruits[end], map.get(fruits[end]) + 1 || 1);

        while (map.size > 2) {
            const count = map.get(fruits[start]);
            if (count - 1 === 0) {
                map.delete(fruits[start]);
            } else {
                map.set(fruits[start], count - 1);                
            }
            start++;
        }
        len = end - start + 1 > len ? end - start + 1 : len;
    }

    return len;
};
// @lc code=end

console.log(totalFruit([0,1,2,2]))
console.log(totalFruit([1,2,3,2,2]))
console.log(totalFruit([3,3,3,1,2,1,1,2,3,3,4]))