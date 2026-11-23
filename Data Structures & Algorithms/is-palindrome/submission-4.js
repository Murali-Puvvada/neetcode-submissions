class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isAlphanum(char) {
        if (
            (char >= "A" && char <= "Z") ||
            (char >= "a" && char <= "z") ||
            (char >= "0" && char <= "9")
        ) {
            return true;
        }
        return false;
    }
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            while (l < r && !this.isAlphanum(s[l])) {
                l++;
            }
            while (r > l && !this.isAlphanum(s[r])) {
                r--;
            }

            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }

            l++;
            r--;
        }

        return true;
    }
}
