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
     * @return {boolean}
     */
    isBalanced(root) {
        var res = true;

        const dfs = (node, height) => {
            if (!node) return height;
            var leftHeight = dfs(node.left, height + 1);

            var rightHeight = dfs(node.right, height + 1);

            if (Math.abs(leftHeight - rightHeight) > 1) {
                res = false;
            }
            return Math.max(leftHeight, rightHeight);
        };

        dfs(root, 1);

        return res;
    }
}
