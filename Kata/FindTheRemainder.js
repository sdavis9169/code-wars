function remainder(a, b){
    // Divide the larger argument by the smaller argument and return the remainder
    let total;
    if(a=== 0 || b === 0){
        total = NaN;
    } else if (a > b) {
        total = a % b;
    } else if (b > a){
        total = b % a
    }
  } 

  console.log(remainder(10,3))