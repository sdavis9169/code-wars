//```Write a JavaScript function to get a random item from an array```
let arr = [1,2,3,4,5,56,6,6,7,]

function randomItem () {
    return arr[Math.floor(Math.random() * arr.length)]
}



console.log(randomItem(arr))