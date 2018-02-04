const e = require('../src');

describe("EventManager", () => {
  describe("Subscribe", () => {
    it("should be able to subscribe a listener to a topic", () => {
      let em = e();
      em.subscribe('hello', console.log);
    });
  });

  describe("Emit", () => {
    it("should be able to emit an event", () => {
      let em = e();
      em.emit('hello', {});
    });
  });

  describe("Workflow", () => {
    let test = {
      cb: function(value) {
        bar = value;
      }
    };

    beforeEach(() => {
      spyOn(test, 'cb');
    });

    it("should receive a topic event", (done) => {
      let em = e();

      em.subscribe("hello", test.cb);
      em.emit("hello", {hello: "world"});

      setTimeout(() => {
        expect(test.cb).toHaveBeenCalled();
        expect(test.cb).toHaveBeenCalledTimes(1);
        expect(test.cb).toHaveBeenCalledWith({hello: "world"});

        done();
      }, 100);
    });
  });
});
