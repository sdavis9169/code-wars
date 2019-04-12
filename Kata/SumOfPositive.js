let arr = [1, -2, 3,4,5]

function positiveSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            return sum += arr[i]
        }
    }return positiveSum
}

console.log(positiveSum([1,-2,3,4,5]))//13;