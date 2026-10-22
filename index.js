// const greet = (name) => {
//     return `Сайн уу, ${name}!` ;
// }
// console.log(greet("bat"));

// const getLength = (word) => {
//     return `${word.length}`
// }
// console.log(getLength("bataa"));

// const toUpper = (text) => {
//     return `${text.toUpperCase()}`
// }
// console.log(toUpper("hello"));

// const toLower = (text) => {
//     return`${text.toLowerCase()}`
// }
// console.log(toLower("HELLO"));

// const getFirstLetter = (word) => {
//     return`${word.charAt(0)}`
// }
// console.log(getFirstLetter("Sun"));
// console.log(getFirstLetter("Hello"));

// const getLastLetter = (word) => {
//     return`${word.at(-1)}`
// }
// console.log(getLastLetter("Hello"));

// const joinWords = (first , second) => {
//     return first.concat(" " + second)
// }
// console.log(joinWords("hello" , "friends"));

// const cleanText = (text) => {
//     return text.trim()
// }
// console.log(cleanText("Hello "));

// const repeatWord = (word , count) => {
//     return word.repeat(count)
// }
// console.log(repeatWord("ha", 3));

// const reverseWord = (word) => {
//     return word.split("").reverse().join("")
// }
// console.log(reverseWord("hello"));

// const getPrefix = (word) => {
//     return word.slice(0, 3)
// }
// console.log(getPrefix("javascript"));

// const getEnding = (word) => {
//     return word.slice(-2)
// }
// console.log(getEnding("hello"));

// const capitalize = (word) => {
//   return word.charAt(0).toUpperCase() + word.slice(1);
// };
// console.log(capitalize("hello"));

// const countVowels = (word) => {
//     let count = 0;
//     for (let letter of word) {
//         if ("aeiou".includes(letter)){
//             count++;
//         }
//     }
//     return count
// }
// console.log(countVowels("education"));

// const countSpaces = (word) => {
//     return word.split(" ").length -1;
// }
// console.log(countSpaces("i love coding"));

// const multiply = (a , b) => {
//     return a * b
// }
// console.log(multiply(2 , 3));

// const square = (number) => {
//     return Math.pow(number, 2)
// }
// console.log(square(5));

// const getMax = (a , b) => {
//     return Math.max(a , b)
// }
// console.log(getMax(9,12));

// const sumDigits = (number) => {
//     let sum = 0;
//     let digits = number.toString().split("")
//     for (let i = 0 ; i < digits.length ; i++){
//         sum += Number(digits[i])
//     }
//     return sum
// }
// console.log(sumDigits(333));

// const calculateAge = (yearOfBirth) => {
//   const currentYear = new Date().getFullYear();
//   return currentYear - yearOfBirth;
// };
// console.log(calculateAge(2008));

// const calculateDiscountedPrice = (price , discountPercent) => {
//     let discount = price * discountPercent / 100
//     return price - discount

// }
// console.log(calculateDiscountedPrice(11000 , 20));

// const calculatePerimeter = (width , height) => {
//     return (width + height) * 2
// }
// console.log(calculatePerimeter(3 , 8));

// const convertHours = (hours) => {
//     return hours * 60
// }
// console.log(convertHours(2));

// const reverseNumber = (number) => {
//     return Number(number.toString().split("").reverse().join(""))
// }
// console.log(reverseNumber(47));

