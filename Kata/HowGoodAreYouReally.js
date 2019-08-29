function betterThanAverage(classPoints, yourPoints) {
    let total =  0;
    for(let i = 0; i < classPoints.length; i++){
        total += classPoints[i]
    } 
    console.log(total)
    let average = total / classPoints.length
    console.log(average)
    if(yourPoints > average){
        return true
    } else return false
}


  
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))