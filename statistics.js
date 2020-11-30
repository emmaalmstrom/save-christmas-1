
function max(arr) {
    let highestNUmber = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > highestNUmber) {
            highestNUmber = arr[i]
        }
    }
    return highestNUmber
}

function min(arr) {
    let minestNumber = arr[0]
    for (let i = 1; i < arr.length; i++) {
       if (arr[i] < minestNumber) {
           minestNumber = arr[i]
       }
        
    }
    return minestNumber

}

function mean(arr) {
    let result = 0

    for (let i = 0; i < arr.length; i++) {
        result = result + arr[i]        
    }
    console.log(result)

    return result / arr.length
}

console.log(mean([1, 6, 72, 5, 3]))

console.log(min([7, 5, 75, 9, 2]))