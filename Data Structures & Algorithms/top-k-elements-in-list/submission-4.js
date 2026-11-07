class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        //Bucket Sort
        const count = Array.from({ length: nums.length + 1 }, () => []);

        const map = new Map();

        for (let num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        for (let [k, v] of map) {
            count[v].push(parseInt(k));
        }

        let res = [];

        for (let i = count.length - 1; i >= 0; i--) {
            for(const n of count[i]) {
                res.push(n)
                if(res.length === k){
                    return res
                }
            }
        }
    }
}
