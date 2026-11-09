class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    findChampion(n, edges) {
        const hasIncoming = new Array(n).fill(false);
        for (let [src, dst] of edges) {
            hasIncoming[dst] = true;
        }

        let champion = -1;
        for (let i = 0; i < n; i++) {
            if (!hasIncoming[i]) {
                if (champion !== -1) return -1;
                champion = i;
            }
        }
        return champion;
    }
}
