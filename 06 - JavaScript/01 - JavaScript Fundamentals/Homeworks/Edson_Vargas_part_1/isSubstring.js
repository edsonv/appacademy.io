function isSubstring(searchString, subString) {
  return searchString.includes(subString);
}

console.log(isSubstring("time to program", "time")); // true
console.log(isSubstring("Jump for joy", "joys")); // false