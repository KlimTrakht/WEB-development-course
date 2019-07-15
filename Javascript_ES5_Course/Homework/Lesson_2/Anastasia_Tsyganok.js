function calcPolygon (n) {
    var N = 1;
    while (n!==0) {
      N=N+((n-1)*4);
      n--;
    }
    return N;
  };