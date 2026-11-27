class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    minimumDifference(nums, k) {
        nums.sort((a, b) => a - b);
        let l = 0;
        let r = k - 1;
        let res = Infinity;
        while (r < nums.length) {
            res = Math.min(res, nums[r] - nums[l]);
            l++;
            r++;
        }
        return res;
    }
}
