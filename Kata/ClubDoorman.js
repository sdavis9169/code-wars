// The Club Doorman will give you a word. To enter the Club you need to provide the right number according to provided the word.

// Every given word has a doubled letter, like 'tt' in lettuce.

// To answer the right number you need to find the doubled letter's position of the given word in the alphabet and multiply this number per 3.

// It will be given only words with one doubled letter.
function passTheDoorMan (word){
    let wordArr = word.split('')

    let duplicate = 1
    for(let x = 0; x < wordArr.length; x++){
      if(wordArr[x] == wordArr[x + 1]){
        duplicate = parseInt(wordArr[x], 36) - 9
      }
    }
    console.log(duplicate)

    return duplicate * 3
    
  }