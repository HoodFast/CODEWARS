function disemvowel(str) {
    let arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', "I", "O", "U"];
    let result = "";
    for(let i = 0; i < str.length; i++){
      if(arr.includes(str[i]) != 1){
        result += str[i];
      }
      
    }
    return result;
  }