
// return the two oldest/oldest ages within the array of ages passed in.
let ages = [2,4,10,8]


function twoOldestAges(ages){
    let newArr = [];
    Math.max.apply(null, ages)
    newArr.push(Math.max.apply(null, ages));
    console.log(newArr)
}

console.log(twoOldestAges())