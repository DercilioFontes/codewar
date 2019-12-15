function filter_list(list) {
  // Return a new array with the strings filtered out
  return list.filter(x => typeof x === "number");
}

console.log(filter_list([1, 2, "a", "b"]), "=", [1, 2]);
console.log(filter_list([1, "a", "b", 0, 15]), "=", [1, 0, 15]);
console.log(filter_list([1, 2, "aasf", "1", "123", 123]), "=", [1, 2, 123]);