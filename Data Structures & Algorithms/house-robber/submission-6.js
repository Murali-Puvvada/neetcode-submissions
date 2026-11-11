class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        // //DFS
        // const dfs = (i) => {
        //     if (i >= nums.length) return 0;
        //     return Math.max(nums[i] + dfs(i + 2), dfs(i + 1));
        // };

        // return dfs(0);
        //DP
        const dp = new Array(nums.length + 2).fill(0);

        for (let i = nums.length - 1; i >= 0; i--) {
            dp[i] = Math.max(nums[i] + dp[i + 2], dp[i + 1]);
        }
        console.log(dp)
        return dp[0];
    }
}
