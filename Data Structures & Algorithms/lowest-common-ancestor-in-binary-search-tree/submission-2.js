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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        //LCA should be in b/w p and q
        if (!root) {
            return null;
        }

        if (p.val > root.val && q.val > root.val && root.right) {
            return this.lowestCommonAncestor(root.right, p, q);
        } else if (p.val < root.val && q.val < root.val && root.left) {
            return this.lowestCommonAncestor(root.left, p, q);
        } else {
            return root;
        }
    }
}
