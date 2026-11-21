class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        let ROWS = board.length;
        let COLS = board[0].length;

        const visit = new Set();

        const dfs = (r, c, curWord) => {
            if (r < 0 || c < 0 || r >= ROWS || c >= COLS || visit.has(`${r},${c}`)) {
                return false;
            }

            visit.add(`${r},${c}`);
            curWord += board[r][c];
            if (curWord == word) {
                return true;
            }
            const found = dfs(r + 1, c, curWord) ||
            dfs(r - 1, c, curWord) ||
            dfs(r, c + 1, curWord) ||
            dfs(r, c - 1, curWord);

            visit.delete(`${r},${c}`);
            return found;
        };

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (dfs(r, c, "")) {
                    return true;
                }
            }
        }

        return false;
    }
}
