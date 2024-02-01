/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function calculateMap (word) {
    let letterTable = Array(26).fill(0);
    for (let l of word) {
        letterTable[l.charCodeAt(0) - 97]++;
    }
    return letterTable.toString();
}



var groupAnagrams = function(strs) {
    let anagramMap = new Map()
    for (let word of strs) {
        key = calculateMap(word)
        if (anagramMap.has(key)) {anagramMap.get(key).push(word)}
        else {anagramMap.set(key, [word, ])}
    }
    return Array.from(anagramMap.values());
};
