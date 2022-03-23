
/* Exercises: Level 1
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' }, */

//Use forEach to console.log each country in the countries array.
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
countries.forEach((element) => console.log(element.toUpperCase()))

// Use forEach to console.log each name in the names array.
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
names.forEach((element) => console.log(element))

// Use forEach to console.log each number in the numbers array.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.forEach((element) => console.log(element))

//Use map to create a new array by changing each country to uppercase in the countries array.

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const countriesToUpperCase = countries.map((countries) => countries.toUpperCase())
console.log(countriesToUpperCase)

//Use map to create an array of countries length from countries array.
/*const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const countriesLength = countries.map((countries) => countries.length())
counsole.log(countries.Length)*/

//Use map to create a new array by changing each number to square in the numbers array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numbersSquare = numbers.map((num) => num * num)
console.log(numbersSquare)

//Use map to change to each name to uppercase in the names array

const name = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const nameToUpperCase = name.map((name) => name.toUpperCase())
console.log(nameToUpperCase)

/*Use map to map the products array to its corresponding prices.

const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

const productsPrice = products.map((products) => products.element())
console.log(productsPrice)*/

//Use filter to filter out countries containing land.
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const countriesWithLand = countries.filter((country) => 
country.includes('land')
)
console.log(countriesWithLand)

//Use filter to filter out countries having six character
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const countriesWithSixLetters = countries.filter((country) => country.length === 6)
console.log(countriesWithSixLetters)

//Use filter to filter out countries containing six letters and more in the country array.

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const countriesWithSixLettersOrMore = countries.filter((country) => country.length === 6 || country.length > 6 )
console.log(countriesWithSixLettersOrMore)

//Use filter to filter out country start with 'E';

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const countriesThatStartWithE = countries.filter((country) => 
country.includes('E'))
console.log(countriesThatStartWithE)

/* Use filter to filter out only prices with values.

const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

const pricesWithValues = products.filter ((product) => 
product.includes(3,6,8,10))
console.log(pricesWithValues)*/

/* Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

fucntion [getStringLists]; {

}*/

// Use reduce to sum all the numbers in the numbers array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sum = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sum)

//Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

const countries = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const phrase = countries.reduce ((acc,cur) => acc +', ' + cur, )
console.log(phrase  + ' are north European countires.')

// Explain the difference between some and every
 /* Every checks to see if all elements are similar in one aspect whi;e some checks to see if SOME elements are similar in one aspect. Every and Some return boolean */

 // Use some to check if some names' length greater than seven in names array

 const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
 const greaterThanSeven = [true,true,false,false]
 const areSomeTrue = greaterThanSeven.some((b) => b === true)
 console.log(areSomeTrue) 

 //Use every to check if all the countries contain the word land
 /*const countries = ['Estonia', 'Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
 const conatinsLand = countries.every(('land'))
 console.log(conatinsLand)*/

 //Explain the difference between find and findIndex.
/* Find returns the first element which satisfies the condition whicle findIndex returns the position of the first element which satisfies the condition */









