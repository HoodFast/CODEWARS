function highAndLow(numbers){
    let nums = numbers.split(" ").map(Number);
    let res = Math.max.apply(null, nums).toString() + ' ' + Math.min.apply(null, nums).toString();
    return res
  }