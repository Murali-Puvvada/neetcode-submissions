class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    isPalindrome(str, l, r) {
        let res = 0;
        while (l >= 0 && r < str.length && str.charAt(l) === str.charAt(r)) {
            res++;
            l--;
            r++;
        }

        return res;
    }
    countSubstrings(s) {
        let res = 0;

        for (let i = 0; i < s.length; i++) {
            res += this.isPalindrome(s, i, i);
            res += this.isPalindrome(s, i, i + 1);
        }

        return res;
    }
}
