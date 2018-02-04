

module.exports = () => {
  let listeners = {};

  return {
    emit: (name, args) => {
      if (!listeners[name]) {
        return;
      }

      listeners[name].forEach((fn) => fn(args));
    },
    subscribe: (name, callback) => {
      if (!listeners[name]) {
        listeners[name] = [];
      }
      listeners[name].push(callback);
    },
  }
};
