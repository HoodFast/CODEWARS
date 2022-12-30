function pigIt(str){
    let arr = str.split(' ')
    let res = ""
    let value = ["!", "?"]
    for (let i=0; i<arr.length; i++) {
      if(value.indexOf(arr[i]) > -1) {
        res += arr[i];
      } else {
          arr[i] = arr[i] + arr[i][0] + "ay ";
          arr[i] = arr[i].slice(1);
          res += arr[i];
      }
    }
    return res.trim()
  }