
function filter(arr, func) {

}

// TEST 1
const numbers = [4, 10, 3, 12, 5, 16, 8, 13, 2, 9, 1, 11, 2]
const filteredNumbers = numbers.filter(x => x < 10)
console.log(filteredNumbers)

// TEST 2 - skriv själv
// dom som är över 10 får kol i strumpan
const numbers2 = [5, 8, 12, 7, 9, 3, 15, 21, 8, 6, 1, 3, 5]
const filterNumbers2 = numbers2.filter(x => x > 9)
console.log(filterNumbers2)

// TEST 3 - skriv själv
