/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start

class ListNode {
    constructor(val, next) {
        this.val = val || 0;
        this.next = next || null;
    }
}

var MyLinkedList = function() {
    this._size = 0;
    this._head = null;
    this._tail = null;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index >= this._size) {
        return -1;
    }
    let p = this._head;
    for(let i = 0; i < index; i++) {
        p = p.next;
    }

    return p.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const newNode = new ListNode(val);
    if (!this._tail) this._tail = newNode;
    newNode.next = this._head;
    this._head = newNode;
    this._size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    const newNode = new ListNode(val);
    if (!this._head) this._head = newNode;
    if (this._tail) this._tail.next = newNode;
    this._tail = newNode;
    this._size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index > this._size) {
        return
    } else if (index <= 0) {
        this.addAtHead(val);
    } else if (index === this._size) {
        this.addAtTail(val);
    } else {
        let p = this._head;
        let newNode = new ListNode(val);

        for(let i = 0; i < index - 1; i++) {
            p = p.next;
        }

        newNode.next = p.next;
        p.next = newNode;
        this._size++;
    }

};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index === 0 && index < this._size) {
        this._head = this._head.next;
        this._size--;
    } else if (index > 0 && index < this._size) {
        let p = this._head;
        for (let i = 0; i < index - 1; i++) {
            p = p.next;
        }

        p.next = p.next ? p.next.next : null;

        if (index === this._size - 1) this._tail = p;
        this._size--;
    }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

var obj = new MyLinkedList()
obj.addAtIndex(1, 0)
obj.get(0)