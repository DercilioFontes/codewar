function isInteresting(number, awesomePhrases) {
    // Go to town!
   
    const isAllRestZero = (num) => {
      const arrRemainingDigits = ('' + num).split('').slice(1).join('');
      return /^0+$/.test(arrRemainingDigits);
    }
    
    const isAllSameDigit = (num) => {
      const firstDigit = ('' + num).split('').shift();
      const re = new RegExp(`^${firstDigit}+$`);
      return re.test(num.toString());
    }
    
    const isIncremental = (num) => {
    
      const increment = (digit) => {
          let result = digit;
          for(let i = 0; i < num.toString().length - 1; i++) {
              result += digit === 9 ? digit = 0 : ++digit;
          }
          return result;
      }
  
      const firstDigit = ('' + num).split('').shift();
      const re = new RegExp(`${increment(firstDigit)}`);
      return re.test(num.toString());
    }
    
    const isDecremental = (num) => {
  
      const decrement = (digit) => {
          let result = digit;
          for(let i = 0; i < num.toString().length - 1; i++) {
            //   result += digit === 0 ? digit = 9 : --digit;
            result += --digit;
          }
          return result;
      }
  
      const firstDigit = ('' + num).split('').shift();
      const re = new RegExp(`${decrement(firstDigit)}`);
      return re.test(num.toString());
  }
    
    const isPalindrome = (num) => {
      const arrDigits = ('' + num).split('');
      let j = arrDigits.length - 1;
      for(let i = 0; j >= i; i++) {
          if(arrDigits[i] !== arrDigits[j]) {
              return false;
          }
          j--;
      }
      return true;
    }
    
    const matchAwesomePhrases = (num, awesomePhrases) => {
      let matched = false;
      const re = new RegExp(`^${num.toString()}$`);
      for(const phrase of awesomePhrases) { 
          if(re.test(phrase)) {
              matched = true;
          }
      }
      return matched;
    }
    
    const testAll = (num) => {
      return isAllRestZero(num) || isAllSameDigit(num) || isIncremental(num) || isDecremental(num) || isPalindrome(num) || matchAwesomePhrases(num, awesomePhrases)
    }
    
    
    if(number > 99) {
        if(testAll(number)) return 2;
        if(testAll(number + 1)) return 1;
        if(testAll(number + 2)) return 1;
    }
    if(number === 99 || number === 98) return 1;
        
    return 0;
    
  }

 
console.log(3, isInteresting(3, [1337, 256]));
console.log(1336, isInteresting(1336, [1337, 256]));
console.log(1337, isInteresting(1337, [1337, 256]));
console.log(11208, isInteresting(11208, [1337, 256]));
console.log(11209, isInteresting(11209, [1337, 256]));
console.log(11211, isInteresting(11211, [1337, 256]));
console.log(109, isInteresting(109, [1337, 256]));
   
/* 
 Best solution in the Code War

 function isInteresting(number, awesomePhrases) {
  var tests = [
    function(n) { return /^\d00+$/.test(n); },
    function(n) { return /^(\d)\1+$/.test(n); },
    function(n) { return RegExp(n).test(1234567890); },
    function(n) { return RegExp(n).test(9876543210); },
    function(n) { return n + '' == (n + '').split('').reverse().join(''); },
    function(n) { return awesomePhrases.some(function(p) { return p == n; }); }
  ];
  
  var interesting = 0;
  tests.some(function(test) {
    if (number > 99 && test(number))
      return interesting = 2;
    else if ((number > 98 && test(number + 1)) || (number > 97 && test(number + 2)))
      interesting = 1;
  });
  return interesting;
}

*/