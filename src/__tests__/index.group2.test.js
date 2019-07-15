var run = require("../index");

describe("when cond is false", () => {
  it("should return 'bar'", () => {
    expect(run(false)).toEqual("bar");
  })
});

