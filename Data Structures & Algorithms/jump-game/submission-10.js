class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        //Recursion
        // const dfs = (i) => {
        //     if (i >= nums.length - 1) {
        //         return true;
        //     }

        //     for (let jump = 1; jump <= nums[i]; jump++) {
        //         if (dfs(i + jump)) {
        //             return true;
        //         }
        //     }
        //     return false;
        // };

        // return dfs(0);
        let flag = nums.length - 1;

        for (let i = nums.length - 2; i >= 0; i--) {
            if (i + nums[i] >= flag) {
                flag = i
            } 
        }

        return flag === 0;
    }
}
