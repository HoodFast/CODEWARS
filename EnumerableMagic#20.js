function eachCons(array, n) {
    const result = [];
      for (i = 0; i <= array.length - n; i++){
      result.push(array.slice(i, i+n));
    }
    return result
  }