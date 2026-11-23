class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        //Check need char while comparing with curr window chars.
        //Shrink if matches if not expand
        const tMap = new Map();
        for (let char of t) {
            tMap.set(char, (tMap.get(char) || 0) + 1);
        }

        const need = tMap.size;
        let has = 0;
        const window = new Map();
        let l = 0;
        let r = 0;
        let minSize = Infinity;
        let res = [l, r];

        while (r < s.length) {
            let char = s[r];
            window.set(char, (window.get(char) || 0) + 1);
            r++;

            if (tMap.get(char) === window.get(char)) {
                has++;
            }
            while (need === has) {
                if (minSize > r - l) {
                    minSize = r - l;
                    res = [l, r];
                }

                window.set(s[l], (window.get(s[l]) || 0) - 1);
                if (tMap.has(s[l]) && window.get(s[l]) < tMap.get(s[l])) {
                    has--;
                }
                l++;
            }
        }

        return minSize === Infinity ? "" : s.slice(res[0], res[1]);
    }
}
