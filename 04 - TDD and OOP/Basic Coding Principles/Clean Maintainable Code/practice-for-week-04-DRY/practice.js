function compareTwo(condition, n1, n2) {
  return condition ? n1 : n2;
}

function multiplyBiggerNumByTwo(num1, num2) {
  let bigNum = compareTwo(num1 > num2, num1, num2);

  return bigNum * 2;
}

function divideBiggerNumByThree(num1, num2) {
  let bigNum = compareTwo(num1 > num2, num1, num2);

  return bigNum / 3;
}

function eatMostTacos(sum1, sum2) {
  let bigNum = compareTwo(sum1 > sum2, sum1, sum2);

  return `I ate ${bigNum} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  let smallDog = compareTwo(weight1 < weight2, weight1, weight2);

  return `I adopted a dog that weighs ${smallDog} pounds.`;
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog,
};
