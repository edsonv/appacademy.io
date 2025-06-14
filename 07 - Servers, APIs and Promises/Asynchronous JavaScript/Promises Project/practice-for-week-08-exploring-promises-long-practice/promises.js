/* ============================== Phase 1 ============================== */
/* -------------------------- exploring async -------------------------- */

// Your code here
function num1() {
  return 1;
}

async function num2() {
  return 2;
}

console.log('num1', num1());
console.log('num2', num2());

num2().then((result) => console.log(result));

/* ============================== Phase 2 ============================== */
/* -------------------------- exploring await -------------------------- */

// Your code here
async function waiting() {
  const value = await num2();
  console.log('waiting', value);
}

waiting();

/* ============================== Phase 3 ============================== */
/* --------------------- creating a custom Promise --------------------- */

// Your code here
async function waitForPromise() {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('done!!!');
    }, 1000);
  });

  const result = await promise;
  console.log('my promise is', result);
}

waitForPromise();

/* ============================== Phase 4 ============================== */
/* -------------------------- exploring then --------------------------- */

// Your code here
new Promise((resolve) => {
  setTimeout(() => {
    resolve('done!');
  }, 1500);
}).then((r) => console.log('then my other promise is', r));

/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */

// Your code here
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

wait();

async function message() {
  wait(5000).then(() => console.log("I'm just were I want to be"));
}

message();
/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */

// Your code here
const tryRandomPromise = (random) =>
  new Promise((resolve, reject) => {
    if (random > 0.5) {
      resolve('success!!!');
    } else {
      reject('random error');
    }
  });

for (let i = 0; i < 10; i++) {
  const random = Math.random();
  wait(2000 + random * 1000)
    .then(() => tryRandomPromise(random))
    .then((result) => console.log('random try #', i, result))
    .catch((err) => console.log('random try #', i, err));
}

/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

// Your code here
const tryTryAgain = async (i) => {
  const random = Math.random();

  await wait(3000 + random * 1000);

  try {
    const result = await tryRandomPromise(random);
    console.log('random again #', i, result);
  } catch (error) {
    console.error('random again #', i, error);
  }
};

for (let i = 1; i < 10; i++) {
  tryTryAgain(i);
}

/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

// Your code here

console.log('END OF PROGRAM');
