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
    const minHeap = new Heap(k, 'min');
    const maxHeap = new Heap(nums.length - k, 'max');

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (minHeap.insert(num) === -1) {
            // 先将小顶堆填满
            if (num >= minHeap.heap[1]) {
                // 新数据比堆顶大时， 抛出堆顶，放入大顶堆中，新数据加入小顶堆中
                const top = minHeap.removeTop();
                maxHeap.insert(top);
                minHeap.insert(num);
            } else {
                // 新数据比堆顶小时， 新数据放入大顶堆中
                maxHeap.insert(num);
            }
        }
    }

    return minHeap.heap[1];

};

class Heap {
    constructor(len, flag) {
        this.len = len;
        this.heap = [null];
        this.count = 0;
        this.flag = flag;
    }

    insert(data) {
        if (this.len === this.count) return -1;

        this.heap[++this.count] = data;
        
        for (let i = this.count; i > 1;) {
            const j = Math.floor(i / 2);
            if (this.needSwap(i, j)) {
                this.swap(i, j);
                i = j;
            } else {
                break;
            }
        }
    }

    removeTop() {
        if (this.count === 0) return -1;
        const top = this.heap[1];

        this.heap[1] = this.heap[this.count];
        this.heap[this.count--] = null;

        this.heapify(1, this.count);

        return top;
    }

    needSwap(childIndex, parentIndex) {
        if (this.flag === 'min') {
            return this.heap[childIndex] < this.heap[parentIndex];
        }
        return this.heap[childIndex] > this.heap[parentIndex];
    }

    heapify(i, count) {
        let pos = i;

        while(true) {
            if (i * 2 <= count && this.needSwap(i * 2, pos)) pos = i * 2;
            if (i * 2 + 1 <= count && this.needSwap(i * 2 + 1, pos)) pos = i * 2 + 1;
            if (pos === i) break;

            this.swap(i, pos);

            i = pos;
        }
    }

    swap(i, j) {
        const tmp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = tmp;
    }
}
// @lc code=end

console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4))