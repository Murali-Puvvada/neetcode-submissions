class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let res = nums[0];
        let curMin = 1;
        let curMax = 1;

        for (let num of nums) {
            let tmp = num * curMax
            curMax = Math.max(num, tmp, num * curMin);
            curMin = Math.min(num, tmp, num * curMin);
            res = Math.max(res, curMax);
        }
        return res;
    }
}
