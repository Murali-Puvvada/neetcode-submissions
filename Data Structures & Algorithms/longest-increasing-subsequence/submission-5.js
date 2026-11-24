class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        //Include i or Skip i ?
        // const dfs = (i, j) => {
        //     if (i === nums.length) {
        //         return 0;
        //     }

        //     let LIS = dfs(i + 1, j); //Skip

        //     if (j === -1 || nums[j] < nums[i]) {
        //         LIS = Math.max(LIS, 1 + dfs(i + 1, i)); //Include
        //     }

        //     return LIS;
        // };

        // return dfs(0, -1);
        const dp = new Array(nums.length + 1).fill(1);

        for (let i = nums.length - 2; i >= 0; i--) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] < nums[j]) {
                    dp[i] = Math.max(dp[i], 1 + dp[j]);
                }
            }
        }

        return Math.max(...dp);
    }
}
