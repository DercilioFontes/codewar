function makeTriangle(m, n) {
  const nElements = n - m + 1;
  const arrOfLines = [];
  const nLines = getNumberOfLines();
  if (nLines === -1) return "";
  else {
    createTriangleOfX();
    fillTriangleWithElements();
    return arrOfLines.join("\n");
  }

  function fillTriangleWithElements() {
    let lineIndex = 0;
    let lastLineWithX = arrOfLines.length - 1;
    let descending = true;
    for (let element = m; element <= n; ) {
      if (descending) {
        if (lineIndex < lastLineWithX) {
          changeXForElement(lineIndex, element, (isLastX = true));
          element++;
          lineIndex++;
        } else if (lineIndex === lastLineWithX) {
          while (arrOfLines[lineIndex].includes("X")) {
            changeXForElement(lineIndex, element, (isLastX = true));
            element++;
          }
          lineIndex--;
          lastLineWithX--;
          descending = false;
        }
      } else {
        while (arrOfLines[lineIndex].includes("X")) {
          changeXForElement(lineIndex, element, (isLastX = false));
          element++;
          if (!arrOfLines[lineIndex].includes("X")) {
            descending = true;
            lineIndex++;
            break;
          }
          lineIndex--;
        }
      }
    }
  }
  function createTriangleOfX() {
    // nLines = number of elements (without white space) in the base
    let padLength = nLines;
    for (let lineIndex = 1; lineIndex <= nLines; lineIndex++) {
      let line = "X"
        .repeat(lineIndex)
        .split("")
        .join(" ") // adds white space
        .padStart(padLength++, " ");
      arrOfLines.push(line);
    }
  }
  function getNumberOfLines() {
    if (nElements === 1) return 1;
    let nLines = 0;
    let remainingItems = nElements;
    for (let i = 1; remainingItems > 0; i++) {
      nLines = i;
      remainingItems -= i;
    }
    if (remainingItems < 0) return -1;
    else return nLines;
  }
  function changeXForElement(lineIndex, element, isLastX) {
    let lineAsArr = arrOfLines[lineIndex].split("");
    // splice mutate the original array
    lineAsArr.splice(
      isLastX ? lineAsArr.lastIndexOf("X") : lineAsArr.indexOf("X"),
      1,
      element
        .toString()
        .split("")
        .pop()
    );
    arrOfLines[lineIndex] = lineAsArr.join("");
  }
}

//makeTriangle(1, 10);

module.exports = makeTriangle;
