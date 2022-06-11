
#include <string>
using namespace std;

class Solution {

public:
    int removePalindromeSub(string input) {
        if (input.empty()) {
            return 0;
        }
        if (isPalindrome(input)) {
            return 1;
        }
        return 2;
    }

private:
    bool isPalindrome(const string& input) {
        int left = 0;
        int right = input.length() - 1;
        while (left < right) {
            if (input[left] != input[right]) {
                return false;
            }
            ++left;
            --right;
        }
        return true;
    }
};
