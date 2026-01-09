class NameError extends Error {
  constructor(...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, NameError);
    }

    this.name = 'NameError';
    this.message = 'There was a problem with the name';
  }
}

try {
  const name = 5;
  if (typeof name !== 'string') {
    throw new NameError('Name cannot be a string');
  }
} catch (e) {
  console.log(e);
}
