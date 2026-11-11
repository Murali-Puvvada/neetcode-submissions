/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let l = 1;
        let r = n;

        while (l <= r) {
            let m = l + Math.floor((r - l) / 2);
            if (guess(m) === 1) {
                l = m + 1;
            } else if (guess(m) === -1) {
                r = m - 1;
            } else {
                return m;
            }
        }
    }
}
