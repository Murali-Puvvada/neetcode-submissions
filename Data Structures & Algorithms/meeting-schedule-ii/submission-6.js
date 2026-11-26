/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        const start = intervals.slice().sort((a, b) => a.start - b.start);
        const end = intervals.sort((a, b) => a.end - b.end);
        let res = 0,
            s = 0,
            count = 0,
            e = 0;

        while (s < intervals.length) {
            if (start[s].start < end[e].end) {
                s++;
                count++;
            } else {
                e++;
                count--;
            }
            res = Math.max(res, count);
        }

        return res;
    }
}
