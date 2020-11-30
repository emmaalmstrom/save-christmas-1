
function map(arr, func) {
    // skapa en ny tom array av samma längd som arr
    const newArray = []
    newArray.length = arr.length

    // för varje element i arr
    //      newArray[j] = func(arr[j])
    for (let j = 0; j < arr.length; j++) {
        newArray[j] = func(arr[j])
        
    }

    // returnera den nya arrayen
    return newArray
}

console.log(map([4, 7, 10], x => x * 2))


// Test 1
console.log('\nTEST 1')
const numberArray = [10, 50, 100]
const newNumberArray = map(numberArray, x => x + 5)
console.log(newNumberArray) // [15, 55, 105]
console.log(numberArray)    // [10, 50, 100] 

// Test 2
console.log('\nTEST 2')
const stringArray = ['boll', 'häst', 'flygplan']
const newStringArray = map(stringArray, str => str.toUpperCase())
console.log(newStringArray) // ['BOLL', 'HÄST', 'FLYGPLAN']
console.log(stringArray)    // ['boll', 'häst', 'flygplan']

// Test 3 - GÖR ETT EGET TEST HÄR
console.log('\nTEST 3')
const numberArray2 = [4, 7, 10]
const newNumberArray2 =  map(numberArray2, x => x * 2)
console.log(newNumberArray2)
console.log(numberArray2)
