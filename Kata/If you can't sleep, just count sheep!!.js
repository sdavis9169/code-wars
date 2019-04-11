let countSheep = function (num){
    let str = "";
    for(let i = 1; i <= num; i++)
        {str+= `${i} sheep...`; }
    return str;
  }

  console.log(countSheep(5))