function calculateFibonacciSeries(sequence) {
  let n1 = 0;
  let n2 = 1;

  for (let i = 1; i <= sequence; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
}

calculateFibonacciSeries(35);
