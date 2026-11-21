class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    add(word) {
        let node = this.root;
        for (let c of word) {
            if (!node.children.has(c)) {
                node.children.set(c, new TrieNode());
            }
            node = node.children.get(c);
        }
        node.isEndOfWord = true;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        //Add words to Trie
        const trie = new Trie();
        for (let word of words) {
            trie.add(word);
        }
        let node = trie.root;
        //Run DFS on each r,c to check if words can be found through the Trie
        let ROWS = board.length;
        let COLS = board[0].length;
        let res = new Set();

        let visit = new Set();

        const dfs = (r, c, node, word) => {
            if (
                r < 0 ||
                c < 0 ||
                r >= ROWS ||
                c >= COLS ||
                visit.has(`${r},${c}`) ||
                !node.children.has(board[r][c])
            ) {
                return false;
            }

            visit.add(`${r},${c}`);
            node = node.children.get(board[r][c]);
            word += board[r][c];
            if (node.isEndOfWord) {
                res.add(word);
            }
            dfs(r + 1, c, node, word);
            dfs(r, c + 1, node, word);
            dfs(r - 1, c, node, word);
            dfs(r, c - 1, node, word);
            visit.delete(`${r},${c}`);
        };

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                dfs(r, c, node, "");
            }
        }

        return Array.from(res)
    }
}
