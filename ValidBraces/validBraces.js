// https://www.codewars.com/kata/5277c8a221e209d3f6000b56

function validBraces(braces) {
  const bracesArr = braces.split("");
  const preBraces = ["(", "{", "["];
  const posBraces = [")", "}", "]"];
  const closingBracesStack = [];

  for (const brace of bracesArr) {
    if (preBraces.includes(brace))
      closingBracesStack.push(posBraces[preBraces.indexOf(brace)]);
    if (posBraces.includes(brace))
      if (closingBracesStack[closingBracesStack.length - 1] === brace)
        closingBracesStack.pop();
      else return false;
  }
  return closingBracesStack.length === 0;
}

module.exports = validBraces;

/**
 * other solution
 *
 function validBraces(braces){
 while(/\(\)|\[\]|\{\}/g.test(braces)){braces = braces.replace(/\(\)|\[\]|\{\}/g,"")}
 return !braces.length;
}
 */