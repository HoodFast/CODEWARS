function positiveSum(arr) {
    let sum = 0;
    let al= arr.length
    for (let i = 0 ; i < al; i++){
      if(arr[i] > 0){
        sum += arr[i]
      }
    }
    return sum
  }