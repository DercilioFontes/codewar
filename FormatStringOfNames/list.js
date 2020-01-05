function list(names) {
  if (names.length === 0) return "";
  if (names.length === 1) return names[0].name;
  if (names.length === 2) return `${names[0].name} & ${names[1].name}`;
  if (names.length > 2)
    return (
      names
        .slice(0, names.length - 2)
        .map(x => x.name)
        .join(", ") +
      ", " +
      list(names.slice(-2))
    );
}

module.exports = list;

/**
 * Other solutions:
 *
 * 1.
 * function list(names) {
  var xs = names.map(p => p.name)
  var x = xs.pop()
  return xs.length ? xs.join(", ") + " & " + x : x || ""
}
 * 2.
  var list = (names) =>  names.map(x => x.name).join(', ').replace(/(.*),(.*)$/, "$1 &$2")
 */
