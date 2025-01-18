/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max =0
    let start =0
    for (let end = 0; end < s.length; end++) {
        for (let i = start; i < end; i++) {
            if (s[i] === s[end]) {
                start = i + 1;
                break;
            }
        }
        max = Math.max(max, end - start + 1);
    }

    return max;
};
