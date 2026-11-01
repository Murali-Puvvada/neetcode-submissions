class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        if(gas.length !== cost.length) return -1
        if(gas.reduce((acc,v)=>acc+v,0)<cost.reduce((acc,v)=>acc+v,0)){
            return -1
        }

        let tank = 0
        let res = 0
        for(let i=0;i<gas.length;i++){
            tank += gas[i]-cost[i]

            if(tank < 0){
                tank = 0
                res = i+1
            }
        }
        return res
    }
}
