function firstStep(input) {
  // Your code here
  return input.split('&');
}

function secondStep(input) {
  // Your code here
  let result = [];
  for (let keyValue of input) {
    let parts = keyValue.split('=');
    result.push(parts);
  }

  return result;
}

function thirdStep(input) {
  // Your code here
  let result = [];
  for (let tuple of input) {
    let replacedTuple = [tuple[0]];
    if (typeof tuple[1] === 'string') {
      replacedTuple.push(tuple[1].replace(/\+/g, ' '));
    }
    result.push(replacedTuple);
  }

  return result;
}

function fourthStep(input) {
  // Your code here
  let result = [];

  for (let tuple of input) {
    let decodedTuple = [tuple[0], decodeURIComponent(tuple[1])];
    result.push(decodedTuple);
  }

  return result;
}

function fifthStep(input) {
  // Your code here
  let keyValues = {};

  for (let tuple of input) {
    keyValues[tuple[0]] = tuple[1];
  }

  return keyValues;
}

function parseBody(str) {
  // Your code here
  return [firstStep, secondStep, thirdStep, fourthStep, fifthStep].reduce(
    (acc, fn) => fn(acc),
    str
  );
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody,
};
