function createPhoneNumber(numbers) {
  return `(${numbers.slice(0, 3).join("")}) ${numbers.slice(3, 6).join("")}-${numbers.slice(6).join("")}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

/**
 * Interesting solution:
 * return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
 *
 * reference:
 *  The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. The original array will not be modified.
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 *
 *  (...)    => Groups: Using parentheses, you can create groups of characters: (...)
 *    *      => Quantifiers: * - Match 0 or more (>= 0) items
 *  $1/$2/$3 => Reference matched groups: Every group that’s matched is assigned a number. $1 refers to the first, $2 to the second, and so on.
 *  https://flaviocopes.com/javascript-regular-expressions/#capturing-groups
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
 */