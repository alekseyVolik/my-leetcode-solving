/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let i = 0;
    let j = s.length - 1;
    let ci;
    let cj;
    while (i <= j) {
        [ci, cj] = [s.charCodeAt(i), s.charCodeAt(j)]
        if (!(ci > 47 && ci < 58) &&
            !(ci > 64 && ci < 91) &&
            !(ci > 96 && ci < 123)) {
            i++;
        }
        else if (!(cj > 47 && cj < 58) &&
            !(cj > 64 && cj < 91) &&
            !(cj > 96 && cj < 123)) {
            j--;
        }
        else {
            if (s[i].toLowerCase() !== s[j].toLowerCase()) {
                return false
            }
            i++;
            j--;
        }

    }
    return true
};