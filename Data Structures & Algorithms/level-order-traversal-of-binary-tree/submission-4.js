/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        //BFS
        const res = [];
        if (!root) return res;

        const queue = new Queue();
        queue.enqueue(root);

        while (!queue.isEmpty()) {
            let level = [];
            let size = queue.size();
            for (let i = 0; i < size; i++) {
                let node = queue.dequeue();
                level.push(node.val);
                if (node.left) queue.enqueue(node.left);
                if (node.right) queue.enqueue(node.right);
            }
            res.push(level);
        }

        return res;
    }
}
