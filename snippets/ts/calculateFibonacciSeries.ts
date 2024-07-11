function calculateFibonacciSerie(sequence: number): void {
  let n1 = 0;
  let n2 = 1;
  let nextTerm: number;

  for (let i = 1; i <= sequence; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
}

calculateFibonacciSerie(35);
