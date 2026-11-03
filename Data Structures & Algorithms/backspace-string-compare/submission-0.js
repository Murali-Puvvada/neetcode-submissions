class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    backspaceCompare(s, t) {
        const res = [];

        for (let chars of [s, t]) {
            const text = [];
            for (let c of chars) {
                if (c === "#") {
                    text.pop();
                } else {
                    text.push(c);
                }
            }
            res.push(text.join(""));
        }

        return res[0] === res[1];
    }
}
