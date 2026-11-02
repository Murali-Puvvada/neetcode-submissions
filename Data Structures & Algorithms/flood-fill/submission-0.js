class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];
        const ROWS = image.length;
        const COLS = image[0].length;
        const visit = new Set();
        visit.add(`${sr},${sc}`)

        const dfs = (r, c) => {
            if (
                r < 0 ||
                r >= ROWS ||
                c < 0 ||
                c >= COLS ||
                image[r][c] !== image[sr][sc] ||
                visit.has(`${r},${c}`)
            )
                return;
            image[r][c] = color;

            visit.add(`${r},${c}`);

            for (let [dr, dc] of directions) {
                dfs(r + dr, c + dc);
            }

            visit.delete(`${r},${c}`);
        };

        for (let [dr, dc] of directions) {
            dfs(sr+dr, sc+dc);
        }

        image[sr][sc] = color;

        return image;
    }
}
