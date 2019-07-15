var run = require("../index");

describe("when cond is true", () => {
  it("should return 'foo'", () => {
    expect(run(true)).toEqual("foo");
  });
});

