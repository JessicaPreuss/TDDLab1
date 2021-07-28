"use strict";
// //set up a basic function
// let summation = (a,b) => {
//     return a + b;
// }
// //must export to make this function avaiable to other nodes
// module.exports = summation;

//translate Pig Latin function for Lab 1
let translatePigLatin = (str) => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = "";
    let convert = str.toString().toLowerCase();
   
    if (vowels.indexOf(str[0]) > -1) {
        newStr = str + "way";
        return newStr;
    } else {
        let firstMatch = convert.match(/[aeiou]/g) || 0;
        let vowel = convert.indexOf(firstMatch[0]);
        console.log(vowel);
        newStr = convert.substring(vowel) + convert.substring(0, vowel) + "ay";
        console.log(convert.substring(vowel));
        return newStr;
    }
}

module.exports = translatePigLatin;