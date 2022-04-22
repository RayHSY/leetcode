/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
 var reverseLeftWords = function(s, n) {
    const strArr = s.split('');

    reverse(strArr, 0, n - 1);
    reverse(strArr, n, strArr.length - 1);
    reverse(strArr, 0, strArr.length - 1);

    return strArr.join('');
};

function reverse(strArr, start, end) {
    while(start < end) {
        const _ = strArr[start];
        strArr[start] = strArr[end];
        strArr[end] = _;
        start++;
        end--;
    }
}