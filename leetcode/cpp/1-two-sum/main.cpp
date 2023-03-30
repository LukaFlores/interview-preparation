#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        for (int i = 0; i < static_cast<int>(nums.size()); i++) {
            for (int j = i + 1; j < static_cast<int>(nums.size()); j++){
                if (nums[i] + nums[j] == target) {
                    return {i,j};
                }
            }
        }
        return {};

    }
};


int main()
{
    Solution x;
    vector<int> vect{2,7,11,15};
    int target = 9;

    cout << "Solution" << endl;
    
    vector<int> solutinVect = x.twoSum(vect, target);
   
    for(int i: solutinVect)
        cout<< i << ' ';

}      

