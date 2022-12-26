function descendingOrder(n){
    let arr = Array.from(String(n), Number);
    arr.sort();
    let res = ''
    for (let i=arr.length-1; i>=0; i--){
      res += arr[i]
    }
    return Number(res)
  }