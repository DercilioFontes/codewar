// https://www.codewars.com/kata/product-of-consecutive-fib-numbers/javascript

function productFib(prod){
    
    function fibonacci(n) {
      if(n === 0) {
          return 0;
      }
      if(n === 1) {
          return 1;
      }
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
    
    let numAnt = 0;
    let numPos = 1;
    
    while(prod > fibonacci(numAnt) * fibonacci(numPos)) {
      numAnt++;
      numPos++;
    }
    
    return [fibonacci(numAnt), fibonacci(numPos), prod === fibonacci(numAnt) * fibonacci(numPos)];
  }

  console.log(productFib(100));

/*
  When we make squares with those widths, we get a nice spiral:

    Fibonacci Spiral 
    (https://www.mathsisfun.com/numbers/images/fibonacci-spiral.svg)

    Do you see how the squares fit neatly together? 
    For example 5 and 8 make 13, 8 and 13 make 21, and so on.
*/


  // Best solution
  function productFib2(prod){
    
    let n = 0;
    let nPlus = 1;  
    while(n*nPlus < prod) {
        nPlus = n + nPlus;
        n = nPlus - n;
    }
    return [n, nPlus, n*nPlus===prod];

  }

  console.log("productFib(100): ", productFib(100));
  console.log("productFib2(100): ", productFib2(100));