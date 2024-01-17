$(document).ready(function(){
    $('button').click(function(event){
        event.preventDefault();

        let word = $('#palindromeInput').val().toLowerCase();
        let isPalindome = checkPalindrome(word)


        if (palindromeInput.value === "") {
              alert("Please input a value!");
            }
         else  if(isPalindome){
            alert(palindromeInput.value + " is a palindrome.")
        }
        else{
            alert(palindromeInput.value + " is  NOT a palindrome.")
        }
    })
})
 //function to check the palindrome word
   function checkPalindrome(word){
   let len = word.length;
   for(let i=0; i<len; i++){
      if (word[i]!==word[len-1-i]){
        return false;
      }
   }
     return true;
   }

   function checkPalindrome(str){
    let originalString = /[\W_]/g;
    let newString = str.toLowerCase().replace(originalString,'')
    let reverseStr = newString.split('').reverse().join('');
    return reverseStr === newString;
   }
