class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        // Cyclic => False
        const preMap = new Map();

        for (let [src, dst] of prerequisites) {
            if (!preMap.has(src)) {
                preMap.set(src, []);
            }
            preMap.get(src).push(dst);
        }

        const visit = new Set();
        const curVisit = new Set();

        const dfs = (crs) => {
            if (curVisit.has(crs)) {
                return false; // Loop
            }

            if (visit.has(crs)) return true; // Already processed

            curVisit.add(crs);

            if (preMap.has(crs)) {
                for (let c of preMap.get(crs)) {
                    if (!dfs(c)) return false;
                }
            }

            curVisit.delete(crs);
            visit.add(crs); 

            return true;
        };

        // Unconnected Components
        for (let c = 0; c < numCourses; c++) {
            if (!dfs(c)) return false;
        }

        return true;
    }
}