// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.
// 
//  
// 
// Example 1:
// 
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:
// 
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:
// 
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
//  
// 
// Constraints:
// 
// -2^31 <= x <= 2^31 - 1


function isPalindrome(x: number): boolean {
	let a: string[] = (""+x).split("")
	let b: string[] = (""+x).split("").reverse()

	if (a === b) return true;
	if (a == null || b == null) return false;
	if (a.length !== b.length) return false;

	for(var i = 0; i < a.length; i++){
		if(a[i] !== b[i]) return false
	}	

	return true

};

console.log(isPalindrome(121) + " | true")
console.log(isPalindrome(-121) + " | false")
console.log(isPalindrome(10) + " | false")
