function getCount(str) {
    let arr = ['a', 'e', 'i', 'o', 'u'];
    let sum = 0;
    for(let i=0; i < str.length; i++){
      if(arr.includes(str[i])) {
         sum++
         }
    }
    return sum;
  }