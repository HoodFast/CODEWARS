function highAndLow(numbers){
  
    let nums = numbers.split(" ");
    for(var i = 0; i < nums.length; i++) {
       nums[i] = Number(nums[i]);
  }
    let res = Math.max.apply(null, nums).toString() + ' ' + Math.min.apply(null, nums).toString();
    return res
  }