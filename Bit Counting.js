var countBits = function(n) {
    let bit = (n).toString(2)
    let res = 0
    for (let i=0; i<bit.length; i++) {
      res += Number(bit[i])
    }
    return res
  };