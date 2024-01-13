// Checking if a word is a palindrome

// method 1: using for loop
function palindromeChecker(word) {
    //declare var rev with empty string for storing reversed word
    let rev = "";
    // initialize var i with last index of the word
    let i = word.length - 1;
    for ( i >= 0; i < word.length/2;  i--) {
        rev += word[i];
    }
    if (rev == word) {
        return true
    } else {
        return false;
    }
}
// initialize var word with 'nana' value
let word = "nana";
//  call function
console.log(palindromeChecker(word));



// Method 2: Using spilt(), reverse() and join() methods
function palindromeChecker2(word2){

  let rev = word2.split('').reverse().join('');

if(rev == word2){
    return true;
}else{
    return false ; 
}
}
let word2 = "mum";
// call function
console.log(palindromeChecker2(word2));