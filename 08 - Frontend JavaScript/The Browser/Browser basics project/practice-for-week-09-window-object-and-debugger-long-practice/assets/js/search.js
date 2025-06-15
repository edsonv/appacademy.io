function findElementById(id) {
  // Return the element in the DOM with corresponding `id`
  // Your code here
  return document.getElementById(id);
}

function findFirstElementOfTag(tag) {
  // Return the first occurence of an element of tag name `tag`
  // Your code here
  return document.getElementsByTagName(tag)[0];
}

function findFirstElementOfClass(cls) {
  // Return the first occurence of an element of class `cls`
  // Your code here
  return document.getElementsByClassName(cls)[0];
}

function findElementsOfTag(tag) {
  // Return an array of elements that have a tag name of `tag`
  // Your code here
  return document.getElementsByTagName(tag);
}

function findElementsOfClass(cls) {
  // Return an array of elements that have are of class `cls`
  // Your code here
  return document.getElementsByClassName(cls);
}

export {
  findElementById,
  findElementsOfTag,
  findFirstElementOfClass,
  findElementsOfClass,
  findFirstElementOfTag,
};
