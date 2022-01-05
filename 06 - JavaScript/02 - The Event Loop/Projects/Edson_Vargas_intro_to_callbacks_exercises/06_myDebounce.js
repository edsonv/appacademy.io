Function.prototype.myDebounce = (interval) => {
  return (...args) => {
    const fnCall = () => {
      timeout = null;
      this(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(fnCall, interval);
  };
};