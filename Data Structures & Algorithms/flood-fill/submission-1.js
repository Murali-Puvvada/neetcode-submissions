class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
        const original = image[sr][sc]
        if (original === color) return image;
        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];
        const ROWS = image.length;
        const COLS = image[0].length;

        const dfs = (r, c) => {
            if (r < 0 || r >= ROWS || c < 0 || c >= COLS || image[r][c] !== original) return;
            image[r][c] = color;

            for (let [dr, dc] of directions) {
                dfs(r + dr, c + dc);
            }
        };

        dfs(sr, sc);

        return image;
    }
}
