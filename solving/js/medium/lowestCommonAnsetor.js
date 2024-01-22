/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
let findPath = function (root, node) {
    let path = [root];
    while (root.val !== node.val) {
        if (node.val <= root.val) {
            root = root.left;
        } else {
            root = root.right;
        }
        path.push(root);
    }
    return path;
}


var lowestCommonAncestor = function (root, p, q) {
    const p_path = findPath(root, p);
    const q_path = findPath(root, q);
    let i = 0;
    while (true) {
        if (p_path[i] !== q_path[i]) {       
            return p_path[--i];
        }
        i++;
    }  
};