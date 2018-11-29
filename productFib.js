// https://www.codewars.com/kata/product-of-consecutive-fib-numbers/javascript

function productFib(prod){
    // ...
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