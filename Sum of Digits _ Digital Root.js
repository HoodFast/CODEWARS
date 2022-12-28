function digitalRoot(n) {
    let digits = String(n);
    let sum = 0;
    for(i=0; i<digits.length; i++){
      sum += parseInt(digits[i]) ;
    }
    if (String(sum).length>1){
          digitalRoot(sum);
      } else {
          return sum;
      }
      return digitalRoot(sum)
  }
  