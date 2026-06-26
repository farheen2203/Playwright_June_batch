function stringManipulation(str)
{
let words = str.split(" ");
let lastWord = words[words.length - 1];
return lastWord.length;

}
console.log(stringManipulation("Farheen is a good"));

function stringManipulationTrimed(str)
{
let trimmedStr = str.trim();
let words = trimmedStr.split(" ");
let lastWord = words[words.length - 1];
return lastWord.length;

}
console.log(stringManipulation("Farheen is a good"));
function isAnagram(str1, str2) {

    let word1 = str1.toLowerCase().replace(/\s/g, "");
    let word2 = str2.toLowerCase().replace(/\s/g, "");

    let sortedWord1 = word1.split("").sort().join("");
    let sortedWord2 = word2.split("").sort().join("");

    return sortedWord1 === sortedWord2;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));

