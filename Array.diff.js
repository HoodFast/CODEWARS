function arrayDiff(a, b) {
    for(let i=0; i < b.length; i++) {
          a = a.filter((n) => {return n != b[i]});
        }
    return a
  }