class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        let xorr = nums.length;
        for (let i = 0; i < nums.length; i++) {
            xorr = xorr ^ i ^ nums[i];
        }
        return xorr;
    }
}
