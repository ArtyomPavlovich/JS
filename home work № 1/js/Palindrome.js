/**
 * @return {boolean}
 */
var Palindrome = function(str) {
	var strLen = str.length;
	if (strLen === 0 || strLen === 1) {
		return true;
	}

	if (str[0] === str[strLen - 1]) {
		return Palindrome( str.slice(1, strLen - 1) );
	}

	return false;
};

console.log( Palindrome ('lol'));
console.log( Palindrome ('sdlifsdi'));
console.log( Palindrome ('noobboon'));