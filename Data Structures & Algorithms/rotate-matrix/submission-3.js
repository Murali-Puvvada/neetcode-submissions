class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    rotate(matrix) {
                matrix.reverse()

        let ROWS = matrix.length
        let COLS = matrix[0].length
        for(let r=0;r<ROWS;r++){
            for(let c=r;c<COLS;c++){
                [matrix[r][c], matrix[c][r]] = [matrix[c][r],matrix[r][c]]
            }
        }
    }
}
