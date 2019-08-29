function reverseWords(str){
    let newVar = str.split(' ').reverse().join(' ')
    console.log(newVar)
    return newVar // reverse those words
    
  }


  console.log(reverseWords('Hey guys whats up'))