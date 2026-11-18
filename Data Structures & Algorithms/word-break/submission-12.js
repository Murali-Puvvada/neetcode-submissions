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
        let cur = this.root;
        for (let char of word) {
            if (!cur.children.has(char)) {
                cur.children.set(char, new TrieNode());
            }
            cur = cur.children.get(char);
        }
        cur.isEndOfWord = true;
    }

    search(s, i, j) {
        let node = this.root;
        for (let idx = i; idx <= j; idx++) {
            if (!node.children.has(s[idx])) {
                return false;
            }
            node = node.children.get(s[idx]);
        }
        return node.isEndOfWord;
    }
}

class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        //With Trie, Easy to Look up words ?
        //Check substrings and check if we can reach end with Set?
        const trie = new Trie();

        for (let word of wordDict) {
            trie.add(word);
        }

        const dp = new Array(s.length + 1).fill(false);
        dp[s.length] = true;

        let maxLen = 0;
        for (let w of wordDict) {
            maxLen = Math.max(maxLen, w.length);
        }

        for (let i = s.length - 1; i >= 0; i--) {
            for (let j = i; j < Math.min(s.length, i + maxLen); j++) {
                if(trie.search(s,i,j)){
                    dp[i] = dp[j+1]
                    if(dp[i]) break;
                }
            }
        }

        return dp[0]
    }
}
