
// https://www.codewars.com/kata/537e18b6147aa838f600001b
function justify(str, len) {
  const words = str.split(" ");
  const lines = [];
  let line = "";

  for (const word of words) {
    // push line of saved words that match the len alone
    if (line.length === len) {
      lines.push(line);
      line = "";
    }

    line = line === "" ? word : line + " " + word;

    if (line.length < len) continue;
    else if (line.length === len) {
      lines.push(line);
      line = "";
    } else {
      let lineWordsArr = line.split(" ");
      line = lineWordsArr.pop();

      if (lineWordsArr.length === 1) lines.push(lineWordsArr[0]);
      else {
        // avoids last word (< length - 1)
        for (let i = 0; i < lineWordsArr.length - 1; i++) {
          lineWordsArr[i] += " ";

          if (lineWordsArr.join(" ").length === len) {
            lines.push(lineWordsArr.join(" "));
            break;
          }
          if (i === lineWordsArr.length - 2) i = -1;
        }
      }
    }
  }

  // adds last line
  if (line !== "") lines.push(line);

  return lines.join("\n");
}

module.exports = justify;
