class MedianFinder {
    //Two Heaps
    constructor() {
        this.small = new PriorityQueue((a, b) => b - a);
        this.large = new PriorityQueue((a, b) => a - b);
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        if (this.small.isEmpty() || num <= this.small.front()) {
            this.small.enqueue(num);
        } else {
            this.large.enqueue(num);
        }

        if (this.small.size() - 1 > this.large.size()) {
            this.large.enqueue(this.small.dequeue());
        }
        if (this.large.size() - 1 > this.small.size()) {
            this.small.enqueue(this.large.dequeue());
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        const isEven = (this.small.size() + this.large.size()) % 2 === 0;

        if (isEven) {
            return (this.small.front() + this.large.front()) / 2;
        } else {
            if (this.small.size() > this.large.size()) {
                return this.small.front();
            } else {
                return this.large.front();
            }
        }
    }
}
