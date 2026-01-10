function stretch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('done stretching');
    }, 1000);
  });
}

function runOnTreadmill() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('done running on treadmill');
    }, 500);
  });
}

function liftWeights() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('done lifting weights');
    }, 2000);
  });
}

// refactor this function to handle Promises using async/await instead of
// .then and .catch
async function workout() {
  try {
    console.log(await stretch());
    console.log(await runOnTreadmill());
    console.log(await liftWeights());
    console.log('done working out');
  } catch (error) {
    console.log(error);
  }
}

/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/

workout();
// should print out the following:
// done stretching
// done running on treadmill
// done lifting weights
// done working out
