import { expect } from "chai";
import jsdom from "jsdom";
import fs from "fs";

describe("my first test", () => {
  it("should pass", () => {
    expect(true).to.equal(true);
  });
});

describe("index.html", () => {
  it("should say hello", (done) => {
    const index = fs.readFileSync("./src/index.html", "utf-8");
    jsdom.env(index, (err, window) => {
      const h1 = window.document.querySelector("h1");
      expect(h1.innerHTML).to.equal("Hello Promise!");
      done();
      window.close();
    });
  });
});
