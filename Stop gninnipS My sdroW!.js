function spinWords(string){
    let arr = string.split(' ')
    let res = ''
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length < 5) {
        res = res + " " + arr[i] 
      } else {
        let str = arr[i].split('').reverse().join('');
        res = res + " " + str
      }
    }
    return res.trim()
  }