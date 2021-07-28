//use require method to obtain summation function from script.js then set as a variable value
// const { test, expect } = require("@jest/globals");
// const summation = require("./script");
// //format test parameters - string and a function
// test("1 + 1 is 2", () => {
//     expect(summation(1,1)).toBe(2);
// })

// test("2 + 5 is 7", () => {
//     expect(summation(2,5)).toBe(7);
// })

// test("10 + 33 is 43", () => {
//     expect(summation(10,33)).toBe(43);
// })

//tests for Lab 1

const translatePigLatin = require("./script");
//words that start with vowels
test ("apple is appleway", ()=> {
    expect(translatePigLatin("apple")).toBe("appleway");
})

test ("orange is orangeway", ()=> {
    expect(translatePigLatin("orange")).toBe("orangeway");
})

test ("identical is identicalway", ()=> {
    expect(translatePigLatin("identical")).toBe("identicalway");
})

test ("america is americaway", ()=> {
    expect(translatePigLatin("america")).toBe("americaway");
})

test ("unique is uniqueway", ()=> {
    expect(translatePigLatin("unique")).toBe("uniqueway");
})

//words that start with one consonant
test("fireboard is ireboardfay" , ()=> {
    expect(translatePigLatin("fireboard")).toBe("ireboardfay");
})

test("perfect is erfectpay" , ()=> {
    expect(translatePigLatin("perfect")).toBe("erfectpay");
})

//words starting with two consonants
test("thirteen is irteenthay" , ()=> {
    expect(translatePigLatin("thirteen")).toBe("irteenthay");
})

//words starting with three consonants

test("christmas is istmaschray" , ()=> {
    expect(translatePigLatin("christmas")).toBe("istmaschray");
})

//lowercase conversion test
test( "CHRISTMAS is istmaschray", ()=> {
    expect(translatePigLatin("CHRISTMAS")).toBe("istmaschray");
})
