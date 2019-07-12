// Given an array, find the int that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

  function findOdd(A) {
    let x = 0;
    for(let i=0; i<A.length; i++){
        for(let k=0; k<A.length; k++){
            if(A[i] === A[k]){
                x++;
            }
        }
        if(x % 2 != 0)
        return A[i]
    }
  }
