function towerBuilder(nFloors) {
  // build here
  const arrResult = [];
  let nStars = 1;
  for (let i = 1; i <= nFloors; i++) {
    const whiteSpace = " ".repeat(nFloors - i);
    const floor = whiteSpace + "*".repeat(nStars) + whiteSpace;
    nStars += 2;
    arrResult.push(floor);
  }
  return arrResult;
}

module.exports = towerBuilder;