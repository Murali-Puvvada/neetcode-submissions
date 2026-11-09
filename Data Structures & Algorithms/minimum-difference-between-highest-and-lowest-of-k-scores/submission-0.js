class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    minimumDifference(nums, k) {
        nums.sort((a, b) => a - b);
        let l = 0;
        let res = Infinity;

        for (let r = k - 1; r < nums.length; r++) {
            res = Math.min(res, nums[r] - nums[l]);
            l++;
        }

        return res;
    }
}
