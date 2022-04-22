/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 颠倒字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(str) {
    let strArr = str.split('');
    let start = 0, end = strArr.length - 1;
    while (start < end && strArr[start] === ' ') {
        start++;
    }
    while (start < end && strArr[end] === ' ') {
        end--;
    }

    const output = [];
    while(start <= end) {
        if (strArr[start] !== ' ') {
            output.push(strArr[start]);
        } else if (output[output.length - 1] !== ' ') {
            output.push(strArr[start]);
        }
        start++;
    }

    reverseChar(output, 0, output.length - 1);

    start = 0; end = 0;
    for (let i = 0; i < output.length; i++) {
        if (output[i] === ' ') {
            reverseChar(output, start, end);
            start = i + 1;
        } else if (i === output.length - 1) {
            reverseChar(output, start, output.length - 1);
            start = i + 1;
        } else {
            end = i;
        }
    }

    return output.join('');
};

function reverseChar(strArr, start, end) {
    while(start < end) {
        let _ = strArr[start];
        strArr[start] = strArr[end];
        strArr[end] = _;
        start++;
        end--;
    }
}
// @lc code=end

reverseWords("the sky is blue")
