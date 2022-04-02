/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    return querySelect(nums, 0, nums.length - 1, k - 1);
};

function querySelect(arr, start, end, k) {
    const pivotIndex = partition(arr, start, end);

    if (pivotIndex < k) {
        return querySelect(arr, pivotIndex + 1, end, k);
    } else if (pivotIndex > k) {
        return querySelect(arr, start, pivotIndex - 1, k);
    }

    return arr[pivotIndex];
}

function partition(arr, start, end) {
    const pivot = arr[end];
    let j = end - 1, i = start;

    while (i <= j) {
        while(arr[i] > pivot) {
            i++;
        }

        while(arr[j] < pivot) {
            j--;
        }

        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }

    swap(arr, i, end);

    return i;
}

function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}
// @lc code=end

findKthLargest([3,2,1,5,6,4], 2);