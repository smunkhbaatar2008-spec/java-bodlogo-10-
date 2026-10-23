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

// const calculateSum = (n) => {
//     return n * (n + 1) / 2
// }
// console.log(calculateSum(10));

// const calculateFactorial = (n) => {
//     let result = 1;
//     for (let i= 1 ; i <= n ; i++){
//         result *= i;
//     }
//     return result
// }
//     console.log(calculateFactorial(3));

// const calculatePower = (base , exponent) => {
//     return Math.pow(base , exponent)
// }
// console.log(calculatePower(5 , 2));

// const isEven = (number) => {
//     let result = " ";
//     if (number % 2 === 0){
//        result = true
//     }
//     else {
//         result = false
//     }
//     return result
// }
// console.log(isEven(8));

// const isEqual = (a , b) => {
//     let result = " ";
//     if (a === b){
//         result = true;
//     }
//     else {
//         result = false
//     }
//     return result
// }
// console.log(isEqual(5 , 5));

// const isDivisibleByFive = (number) => {
//     let result = " ";
//     if (number % 5 === 0){
//         result = true;
//     }
//     else {
//         result = false;
//     }
//     return result
// }
// console.log(isDivisibleByFive(21));

// const getFullName = (person) => {
//     let lastname = "bat";
//     let firstname = "anu";
//     return person = lastname + " " + firstname
// }
// console.log(getFullName());

// const getProductTotal = (product) => {
//     let productTotal = {
//         price : 500 ,
//         quantity : 4
//     }
//     return product = productTotal.price * productTotal.quantity
// }
// console.log(getProductTotal());

// const createUser = (name , age) => {
//     let person = {
//         name : "" ,
//         age : 0 ,
//     }
//     person.name = name;
//     person.age = age;
//     return person
// }
// console.log(createUser("bat" , 22));

// const isStudentPassed = (student) => {
//     let result = " ";
//     if (student >= 60){
//         result = true;
//     }
//     else {
//         result = false;
//     }
//     return result
// }
// console.log(isStudentPassed(59));

// const getCity = (user) => {
//     let address = {
//         city : "ub"
//     }
//     user = address.city
//     return user
// }
// console.log(getCity());

// const getRectangleArea = (Area) => {
//   let rectangle = {
//     width: 5,
//     height: 3,
//   };
//   Area = rectangle.height * rectangle.width;
//   return Area;
// };
// console.log(getRectangleArea());

// const getProductValues = () => {
//     let product = {
//         title: "Ном",
//         price: 5000
//     }
//     let finalProduct = [];
//     finalProduct.push(product.price , product.title)
//     return finalProduct
// }
// console.log(getProductValues());

// const sumArray = (numbers) => {
//     let result = 0;
//     for (let i = 0 ; i < numbers.length ; i++){
//         result += numbers[i]
//     }
//     return result
// }
// console.log(sumArray([1 , 5]));

// const findMin = (numbers) => {
//     Math.min(numbers)
//     return numbers
// }
// console.log(findMin(  5 ,6));

// const getEvenNumbers = (numbers) => {
//   let finalNumber = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       finalNumber.push(numbers[i]);
//     }
//   }
//   return finalNumber;
// };
// console.log(getEvenNumbers([2, 5, 7, 8]));

// const getNegativeNumbers = (numbers) => {
//     let finalNumber = [];
//     for (let i = 0 ; i < numbers.length ; i++ ){
//         if (numbers[i] < 0){
//             finalNumber.push(numbers[i])
//         }
//     }
//     return finalNumber
// }
// console.log(getNegativeNumbers([-1 , -2 , 4 ,-5]));

// const sumEvenNumbers = (numbers) => {
//     let sum = 0; 
//     for (let i = 0 ; i < numbers.length ; i++){
//         if (numbers[i] % 2 === 0) {
//             sum += numbers[i]
//         }
//     }
//     return sum
// }
// console.log(sumEvenNumbers([1,2,2,4]));

// const uppercaseWords = (word) => {
//     let words = [];
//     for (let i = 0 ; i < word.length ; i++){
//         words.push(word[i].toUpperCase())
//     }
//     return words
// }
// console.log(uppercaseWords(["cat", "dog"]));

// const combineArrays = (firstArray , secondArray) => {
//     let result = [];
//     result.push(firstArray.concat(secondArray))
//     return result
// }
// console.log(combineArrays([1,2] , [3,4]));

const getExpensiveProducts = () => {
    let minprice = 1000;
    let products = [
        { title: "Үзэг", price: 1000 }, 
        { title: "Ном", price: 3000 }
    ]
    let result = [];
    for (let i = 0 ; i <products.length ; i++){
        if (products[i].price >= minprice){
            result.push(products[i])
        }
    }
    return result
}
console.log(getExpensiveProducts());
