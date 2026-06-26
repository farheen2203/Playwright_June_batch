
function reverse(str)
{
let reversed = "";
let character = str.split("");
for (let i = character.length - 1; i >= 0; i--)
{
reversed = reversed + character[i];
}
console.log(reversed);
return reversed;
}
//reverse("racecar");

function checkPalindrome(str1)
{
    let reversedStr=reverse(str1);
    if (reversedStr===str1)
    {
        console.log("It is a palindrome");
            return true;
    }
    else
    {
        console.log("Not a palindrome");
        return false;
    }
}
checkPalindrome("FArheen");