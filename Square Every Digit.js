function squareDigits(num){
    let digit = String(num)
    let res = ''
    for(let i = 0; i < digit.length; i++) {
      let a = Number(digit[i])**2
      res += String(a)
    }
    return Number(res);
  }