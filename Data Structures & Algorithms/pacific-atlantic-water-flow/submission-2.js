class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        let ROWS = heights.length;
        let COLS = heights[0].length;
        let pac = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
        let atl = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
        let directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];

        const dfs = (r, c, ocean) => {
            ocean[r][c] = true;
            for (let [dr, dc] of directions) {
                let nr = r + dr;
                let nc = c + dc;
                if (
                    nr >= 0 &&
                    nc >= 0 &&
                    nr < ROWS &&
                    nc < COLS &&
                    !ocean[nr][nc] &&
                    heights[nr][nc] >= heights[r][c]
                ) {
                    dfs(nr, nc, ocean);
                }
            }
        };

        for (let r = 0; r < ROWS; r++) {
            dfs(r, 0, pac);
            dfs(r, COLS - 1, atl);
        }

        for (let c = 0; c < COLS; c++) {
            dfs(0, c, pac);
            dfs(ROWS - 1, c, atl);
        }

        let res = [];
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (pac[r][c] && atl[r][c]) {
                    res.push([r, c]);
                }
            }
        }
        return res;
    }
}
