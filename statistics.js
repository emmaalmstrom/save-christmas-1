
function max(arr) {
    
}

function min(arr) {

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