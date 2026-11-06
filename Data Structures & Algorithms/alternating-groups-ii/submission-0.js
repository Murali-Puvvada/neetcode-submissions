class Solution {
    /**
     * @param {number[]} colors
     * @param {number} k
     * @return {number}
     */
    numberOfAlternatingGroups(colors, k) {
        let l = 0;
        let n = colors.length;
        let res = 0;

        for (let r = 1; r < n + k - 1; r++) {
            if (colors[r % n] == colors[(r - 1) % n]) {
                l = r;
            }
            
            if (r - l + 1 > k) {
                l++;
            }

            if (r - l + 1 == k) {
                res++;
            }

        }
        return res;
    }
}
