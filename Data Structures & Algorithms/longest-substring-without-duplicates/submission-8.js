class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        let maxLen = 0;
        let window = new Set();
        //Sliding Window
        for (let r = 0; r < s.length; r++) {
            while (window.has(s[r])) {
                window.delete(s[l])
                l++;
            }
            window.add(s[r]);
            maxLen = Math.max(maxLen, r - l + 1);
        }

        return maxLen;
    }
}
