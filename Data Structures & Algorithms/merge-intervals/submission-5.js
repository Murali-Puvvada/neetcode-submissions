class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);

        const res = [];
        res.push(intervals[0]);

        for (let i = 1; i < intervals.length; i++) {
            let prevEnd = res[res.length - 1][1];
            const [curStart, curEnd] = intervals[i];

            if (curStart > prevEnd) {
                res.push([curStart, curEnd]);
            } else {
                res[res.length - 1][1] = Math.max(prevEnd, curEnd);
            }
        }

        return res;
    }
}
