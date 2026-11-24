class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        //Recursion
        // const dfs = (i) => {
        //     if(i > n){
        //         return 0
        //     }
        //     if (i === n) {
        //         return 1;
        //     }
        //     return dfs(i + 1) + dfs(i + 2);
        // };
        // return dfs(0);

        const dp = new Array(n + 2).fill(0);
        dp[n] = 1;

        for (let i = n - 1; i >= 0; i--) {
            dp[i] = dp[i + 1] + dp[i + 2];
        }

        return dp[0];
    }
}
