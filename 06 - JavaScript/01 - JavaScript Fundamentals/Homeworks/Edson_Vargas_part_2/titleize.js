function titleize(names, callback) {
  let titleized = names.map(name => `MX. ${name} Jingleheimer Schmidt`);
  callback(titleized);
}

console.log(titleize(["Mary", "Brian", "Leo"], (names) => {
  names.forEach(name => {
    console.log(name);
  });
}));