function getCount(str) {
    var vowelsCount = 0;
    let newStr = str.split('');
    console.log(newStr)
    for(let i = 0; i < newStr.length; i++){
        console.log(newStr[i])
        if(newStr[i]==='a'){
            vowelsCount += 1
        } if(newStr[i]==='e'){
            vowelsCount += 1
        } if(newStr[i]==='i'){
            vowelsCount += 1
        } if(newStr[i]==='o'){
            vowelsCount += 1
        } if(newStr[i]==='u'){
            vowelsCount += 1
        } 
    }

    return vowelsCount;
  }

  console.log(getCount('Hey you guys'))

