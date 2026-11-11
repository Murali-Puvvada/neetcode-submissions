class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        if (intervals.length === 0) return 0;
        intervals.sort((a, b) => a[0] - b[0]);

        let res = 0;
        let prevEnd = intervals[0][1];

        for (let i = 1; i < intervals.length; i++) {
            const [start, end] = intervals[i];

            if (start < prevEnd) {
                res++;
                prevEnd = Math.min(prevEnd, end); // keep the one that ends earlier
            } else {
                prevEnd = end;
            }
        }
        return res;
    }
}
