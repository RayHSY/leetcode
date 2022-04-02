/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const hashMap = new Map();
    const heap = [];

    for (let i = 0; i < nums.length; i++) {
        if (hashMap.has(nums[i])) {
            hashMap.set(nums[i], {
                key: nums[i],
                value: hashMap.get(nums[i]).value + 1,
            });
        } else {
            hashMap.set(nums[i], {
                key: nums[i],
                value: 1,
            });
        }
    }

    hashMap.forEach((value) => {
        heapInsert(heap, value, k);
    })

    return heap.map(h => h.key);
};

function heapInsert(heap, data, len) {
    if (heap.length === len) {
        if (data.value > heap[0].value) {
            heap[0] = data;

            let i = 0;
            while(true) {
                let pos = i;
                if (i * 2 + 1 < len && heap[2 * i + 1].value < heap[pos].value) pos = 2 * i + 1;
                if (i * 2 + 2 < len && heap[2 * i + 2].value < heap[pos].value) pos = 2 * i + 2;
                if (pos === i) break;

                swap(heap, i, pos);
                i = pos;
            }
        }
    } else {
        heap.push(data);

        for (let i = heap.length - 1; i > 0; i--) {
            let parentIndex = Math.floor((i - 1)/ 2);
            if (heap[i].value < heap[parentIndex].value) {
                swap(heap, i, parentIndex);
            }
        }
    }
}

function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}
// @lc code=end

topKFrequent([4,1,-1,2,-1,2,3], 2);