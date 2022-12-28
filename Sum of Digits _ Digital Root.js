function digitalRoot(n) {
    let digits = String(n);
    let sum = 0;
    for(i=0; i<digits.length; i++){
      sum += parseInt(digits[i]) ;
    }
    if (sum < 10){    
        return sum;
      } else {
        return digitalRoot(sum);
      }
  }