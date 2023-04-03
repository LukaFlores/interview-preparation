// Given a string s, find the length of the longest 
// substring
//  without repeating characters.
// 
//  
// 
// Example 1:
// 
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:
// 
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:
// 
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:
// 
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.
// 

// First Attempt

// function lengthoflongestsubstring(s: string): number {
// 
//     // longest list length
//     var longestlist = 0;
//     var count : number = 0;
//     var repeatednumber : { [p: string]: boolean } = {}
// 
//     // string: "abcabcbb"
// 
//     for(let i = 0; i < s.length; i++){
//         for(let j = i; j < s.length; j++){
// 
//             // gets current character
//             const currentcharacter = s[j];
// 
//             // if the current character is in the repeated list: clear list and check to see if count is the longest list
//             if(repeatednumber[currentcharacter]){
//                 repeatednumber = {};
//                 longestlist = math.max(longestlist, count);
//                 count = 0;
//                 break;
//             }
// 
//             // if currentcharacter is not in the repeated list increase count and add to object true
//             count += 1;
//             repeatednumber[currentcharacter] = true
//             longestlist = math.max(longestlist, count)
// 
//         }
//     }
// 
//     return longestlist;
// };

// Attempt #2

function lengthOfLongestSubstring(s: string): number {

    // Longest List Length
    var longestList = 0;
    var repeatedNumber : string[] = [] 

    // String: "abcabcbb"

    for(let i = 0; i < s.length; i++){
        for(let j = i; j < s.length; j++){

            if(repeatedNumber.includes(s[j])){
                repeatedNumber = [];
                break;
            }

            repeatedNumber.push(s[j]);
            longestList = Math.max(longestList, repeatedNumber.length);

        }
    }

    return longestList;
};



console.log(lengthOfLongestSubstring("abcabcbb") + " | 3" );
console.log(lengthOfLongestSubstring("bbbbb") + " | 1" );
console.log(lengthOfLongestSubstring("pwwkew") + " | 3" );




        
