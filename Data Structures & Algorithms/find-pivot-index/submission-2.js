class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        let prefix = new Array(nums.length+1).fill(0);

        for (let i = 0; i < nums.length; i++) {
            prefix[i+1] = prefix[i] + nums[i]
        }

        for (let i = 0; i < prefix.length; i++) {
            if (prefix[i] === prefix[nums.length] - prefix[i+1]) {
                return i;
            }
        }

        console.log(prefix);
        return -1;
    }
}
