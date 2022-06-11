
/**
 * @param {string} input
 * @return {number}
 */
var removePalindromeSub = function (input) {
    if (input.length === 0) {
        return 0;
    }
    if (isPalindrome(input)) {
        return 1;
    }
    return 2;
};

/**
 * @param {string} input
 * @return {boolean}
 */
function isPalindrome(input) {
    let left = 0;
    let right = input.length - 1;
    while (left < right) {
        if (input.charAt(left) !== input.charAt(right)) {
            return false;
        }
        ++left;
        --right;
    }
    return true;
}
