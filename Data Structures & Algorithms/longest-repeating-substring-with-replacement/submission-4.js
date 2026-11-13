class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let window = new Map();
        let l = 0;
        let res = 0;

        for (let r = 0; r < s.length; r++) {
            let char = s[r];
            window.set(char, (window.get(char) || 0) + 1);

            let max = 0;
            for (let v of window.values()) {
                max = Math.max(max, v);
            }

            if (r - l + 1 - max > k) {
                window.set(s[l], window.get(s[l]) - 1);
                l++
            }
            if (r - l + 1 - max <= k) {
                res = Math.max(res, r - l + 1);
            }
        }

        return res;
    }
}
